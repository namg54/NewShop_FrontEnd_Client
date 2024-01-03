import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  // {
  //   path:'',
  //   title:'خانه',
  //   component:AppComponent
  // },
  {
    path: 'shop',
    title:'فروشگاه',
    loadChildren: () => import('../app/shop/shop.module').then((x) => x.ShopModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
