import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPagination } from '../../shared/models/IPagination';
import { IProduct } from '../../shared/models/IProduct';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { shopParams } from '../../shared/models/shopParams';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  public shopParams: shopParams;
  @Input() itemsPerPage: number;
  @Input() pageIndex: number;
  @Input() totalItems: number;
  @Input() result: boolean;
  @Output() updateParams = new EventEmitter<boolean>();

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopParams = this.shopService.getShopParams();
  }
  
  onPageChange(pagenumber: number) {
    this.shopParams.pageIndex = pagenumber;
    this.shopService.UpdateShopParams(this.shopParams);
    this.updateParams.emit(true);
  }
}
