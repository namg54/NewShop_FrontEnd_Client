import { Component, OnDestroy, OnInit,HostListener } from '@angular/core';
import { ShopService } from './shop.service';
import { Observable, Subscription } from 'rxjs';
//import option
import {MatSidenavModule} from '@angular/material/sidenav';
import { IProduct } from '../shared/models/IProduct';
import { IPagination } from '../shared/models/IPagination';
import { IType } from '../shared/models/IType';
import { IBrand } from '../shared/models/IBrand';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit, OnDestroy {
sortTypeOptions: any;
onChangeSortType(arg0: any) {
throw new Error('Method not implemented.');
}
shopParams: any;
sortOptions: any;
onChangeSort(arg0: any) {
throw new Error('Method not implemented.');
}
  private sub$ = new Subscription();
  data: IPagination<IProduct>;
  public dataTypes: IType[];
  public dataBrands: IBrand[];

  public sidenavOpen: boolean = true;
  modeside: any = 'over';
  hasBackdropval:boolean=true;
  constructor(private shopService: ShopService) {}
  @HostListener('window:resize')
  public onWindowResize() {
    window.innerWidth < 960 ? (this.sidenavOpen = false) : (this.sidenavOpen = true);
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  ngOnInit(): void {
    this.getProducts();
    this.getBrand();
    this.getType();
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

  private getProducts() {
    const sub$ = this.shopService.getProducts().subscribe((res) => {
      this.data = res;
    });
    this.sub$.add(sub$);
  }
}
