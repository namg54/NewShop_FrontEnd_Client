import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
//import modules
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ShopFiltersComponent } from './shop-filters/shop-filters.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import {MatInputModule} from '@angular/material/input';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShopComponent,
    ShopFiltersComponent,
    PaginationComponent,
    ShopDetailComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    MatSidenavModule,
    SharedModule,
    MatSidenavModule,
    FormsModule,
    MatInputModule,
    RouterModule
  ]
})
export class ShopModule { }
