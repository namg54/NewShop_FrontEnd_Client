import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { FooterComponent } from './Layers/footer/footer.component';
import { NavbarComponent } from './Layers/navbar/navbar.component';
//Import Module
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './Layers/not-found/not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';
import { ServerErrorComponent } from './Layers/server-error/server-error.component';
import { BreadcrumbComponent } from './Layers/breadcrumb/breadcrumb.component';
import { SharedModule } from '../shared/shared.module';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { BasketModule } from '../basket/basket.module';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NotFoundComponent, ServerErrorComponent, BreadcrumbComponent],
  imports: [CommonModule, RouterModule, SharedModule,BasketModule],
  exports: [FooterComponent, NavbarComponent, BreadcrumbComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:loadingInterceptor,
      multi:true 
    }
  ]
})
export class CoreModule {}
