import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { NotFoundComponent } from './core/Layers/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ServerErrorComponent } from './core/Layers/server-error/server-error.component';

const routes: Routes = [
  {
    path: '',
    title: 'خانه',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule),
    data: {
      breadcrumb: {
        label: 'خانه',
        info: 'home'
      }
    }
  },
  {
    path: 'shop',
    title: 'فروشگاه',
    loadChildren: () => import('../app/shop/shop.module').then((x) => x.ShopModule),
    data: {
      breadcrumb: {
        label: ' فروشگاه ',
        info: 'shopping_cart'
      }
    }
  },
  {
    path: 'notFound',
    title: 'عدم وجود صفحه',
    component: NotFoundComponent,
    data: {
      breadcrumb: {
        label: 'عدم وجود صفحه',
        info: 'warning'
      }
    }
  },
  {
    path: 'ServerError',
    title: 'خطای سرور',
    component: ServerErrorComponent
  },
  {
    path: '**',
    title: 'عدم وجود صفحه',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
