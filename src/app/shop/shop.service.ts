import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/IPagination';
import { IProduct } from '../shared/models/IProduct';
import { Observable, map } from 'rxjs';
import { IType } from '../shared/models/IType';
import { IBrand } from '../shared/models/IBrand';
import { shopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private backendUrl = environment.backendUrl;
  private showParams = new shopParams();

  constructor(private http: HttpClient) {}

  getShopParams() {
    return this.showParams;
  }
  UpdateShopParams(params: shopParams) {
    this.showParams = params;
  }
  getProducts(): Observable<IPagination<IProduct>> {
    let params = this.generateShopParams();
    return this.http.get<IPagination<IProduct>>(this.backendUrl + 'product', { params });
  }

  getProduct(id: number) {
    return this.http.get<IProduct>(`${this.backendUrl}product/${id}`);
  }

  generateShopParams() {
    let params = new HttpParams();
    if (this.showParams.search) params = params.append('search', this.showParams.search);
    if (this.showParams.brandId && this.showParams.brandId > 0) params = params.append('brandId', this.showParams.brandId);
    if (this.showParams.typeId && this.showParams.typeId > 0) params = params.append('typeId', this.showParams.typeId);
    params = params.append('pageIndex', this.showParams.pageIndex);
    params = params.append('pageSize', this.showParams.pageSize);
    params = params.append('typeSort', this.showParams.typeSort);
    params = params.append('sort', this.showParams.sort);
    return params;
  }
  getBrands(includeAll = true) {
    return this.http.get<IBrand[]>(this.backendUrl + 'productBrand').pipe(
      map((brands) => {
        if (includeAll) brands = [{ id: 0, title: 'همه' }, ...brands];
        return brands;
      })
    );
  }
  getTypes(includeAll = true) {
    return this.http.get<IType[]>(this.backendUrl + 'productTypes').pipe(
      map((types) => {
        if (includeAll) types = [{ id: 0, title: 'همه' }, ...types];
        return types;
      })
    );
  }
}
