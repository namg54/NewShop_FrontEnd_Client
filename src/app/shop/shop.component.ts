import { Component, ViewChild, OnDestroy, OnInit, HostListener, ElementRef } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';
//import option
import { IProduct } from '../shared/models/IProduct';
import { IPagination } from '../shared/models/IPagination';
import { shopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit, OnDestroy {
  public shopParams: shopParams;
  public currentPage: number;
  //searchh box
  searchValue: string = '';
  @ViewChild('search', { static: false }) searchTerm: ElementRef;

  updateParams(updated: boolean) {
    if (updated) {
      this.getProducts();
    }
  }
  onSearch() {
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.getProducts();
  }
  onClear() {
    debugger;
    this.searchValue = null;
    this.searchTerm.nativeElement.value = undefined;
    this.shopParams.search ='';
    this.shopService.UpdateShopParams(this.shopParams);
    this.getProducts();
  }
  private sub$ = new Subscription();
  data: IPagination<IProduct>;

  public sidenavOpen: boolean = true;
  modeside: any = 'over';
  hasBackdropval: boolean = true;
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
    this.shopParams = this.shopService.getShopParams();
  }

  private getProducts() {
    const sub$ = this.shopService.getProducts().subscribe((res) => {
      this.data = res;
    });
    this.sub$.add(sub$);
  }
}
