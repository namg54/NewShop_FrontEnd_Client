import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/IPagination';
import { IProduct } from '../shared/models/IProduct';
import { Observable, map } from 'rxjs';
import { IType } from '../shared/models/IType';
import { IBrand } from '../shared/models/IBrand';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private backendUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IPagination<IProduct>> {
    return this.http.get<IPagination<IProduct>>(this.backendUrl + 'product');
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
