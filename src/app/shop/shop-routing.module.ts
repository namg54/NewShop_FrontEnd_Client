import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShopComponent
  },
  {
    path: ':id',
    component: ShopDetailComponent,
    pathMatch: 'full',
    data: { breadcrumb: { alias: 'ProductDetail', info: 'shop' } }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
