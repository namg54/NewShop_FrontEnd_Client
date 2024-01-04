import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
//import modules
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ShopFiltersComponent } from './shop-filters/shop-filters.component';



@NgModule({
  declarations: [
    ShopComponent,
    ShopFiltersComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    MatSidenavModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class ShopModule { }
