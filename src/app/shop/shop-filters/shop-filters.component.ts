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
testt : string;
  sortTypeOptions= [
    { key: 1, title: 'زیاد به کم' },
    { key: 2, title: 'کم به زیاد' }
  ];
  sortOptions= [
   { key: 1, title: 'قیمت' },
   { key: 2, title: 'عنوان محصول' },
   { key: 3, title: 'برند' },
   { key: 4, title: 'نوع' }
  ];

  public dataTypes: IType[];
  public dataBrands: IBrand[];
  public shopParams: shopParams;
  @Output() updateParams = new EventEmitter<boolean>();
tesst: any="sss";

  onChangeTypes(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopService.UpdateShopParams(this.shopParams);
    this.updateParams.emit(true);
  }
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
  onChangeSort(sort: number) {
    this.shopParams.sort = sort;
    this.shopService.UpdateShopParams(this.shopParams);
    this.updateParams.emit(true);
  }
  onChangeSortType(typeSort: number) {
    this.shopParams.typeSort=typeSort;
    this.shopService.UpdateShopParams(this.shopParams);
    this.updateParams.emit(true);
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
