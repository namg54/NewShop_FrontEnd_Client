import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { IProduct } from '../../shared/models/IProduct';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrl: './shop-detail.component.scss'
})
export class ShopDetailComponent implements OnInit {
  id: number;
  data:IProduct;
  constructor(private shopService: ShopService,
     private route: ActivatedRoute,private title:Title,private bread:BreadcrumbService) {
    this.id = Number(this.route.snapshot?.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.shopService.getProduct(this.id).subscribe((res) => {
      this.data=res;
      this.title.setTitle(res?.title);
      this.bread.set('@ProductDetail',res?.title);
      this.bread.breadcrumbs$

    });
  }
}
