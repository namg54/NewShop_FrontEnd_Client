import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
//Components
import { CardShopComponent } from './Components/card-shop/card-shop.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
//ngx-bootstrap
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';
//breadcrumb

@NgModule({
  declarations: [CardShopComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    PaginationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      timeOut: 5000
    }),
    BreadcrumbModule,
    NgxSpinnerModule.forRoot({
      type:'square-jelly-box'
   })
  ],
  exports: [
    RouterModule,
    MatSidenavModule,
    CardShopComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    PaginationModule,
    ToastrModule,
    BreadcrumbModule,
    NgxSpinnerModule
  ]
})
export class SharedModule {}
