import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
//Components
import { CardShopComponent } from './Components/card-shop/card-shop.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [CardShopComponent],
  imports: [CommonModule, MatSidenavModule, MatFormFieldModule,MatButtonModule,MatSelectModule,MatIconModule],
  exports: [MatSidenavModule, CardShopComponent, MatFormFieldModule,MatButtonModule,MatSelectModule,MatIconModule]
})
export class SharedModule {}
