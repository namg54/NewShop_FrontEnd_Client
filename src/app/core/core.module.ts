import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { FooterComponent } from './Layers/footer/footer.component';
import { NavbarComponent } from './Layers/navbar/navbar.component';
//Import Module
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
FooterComponent,
NavbarComponent
  ],
})
export class CoreModule { }
