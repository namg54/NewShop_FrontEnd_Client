import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IType } from '../../shared/models/IType';
import { IBrand } from '../../shared/models/IBrand';
import { ShopService } from '../shop.service';
import { shopParams } from '../../shared/models/shopParams';

@Component({
  selector: 'app-shop-filters',
  templateUrl: './shop-filters.component.html',
  styleUrl: './shop-filters.component.scss'
})
export class ShopFiltersComponent implements OnInit {
onChangeTypes(typeId:number) {
this.shopParams.typeId=typeId;
this.shopService.UpdateShopParams(this.shopParams);
this.updateParams.emit(true);
}
  @Output() updateParams = new EventEmitter<boolean>();

  onChangeBrands(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopService.UpdateShopParams(this.shopParams);
    this.updateParams.emit(true);
  }
  constructor(private shopService: ShopService) {}
  ngOnInit(): void {
    this.shopParams = this.shopService.getShopParams();
    this.getBrand();
    this.getType();
  }
  sortTypeOptions: any;
  sortOptions: any;
  public dataTypes: IType[];
  public dataBrands: IBrand[];
  public shopParams: shopParams;

  onChangeSort(arg0: any) {
    throw new Error('Method not implemented.');
  }
  onChangeSortType(arg0: any) {
    throw new Error('Method not implemented.');
  }
  private getType() {
    this.shopService.getTypes().subscribe((res) => {
      this.dataTypes = res;
    });
  }

  private getBrand() {
    this.shopService.getBrands().subscribe((res) => {
      this.dataBrands = res;
    });
  }
}
