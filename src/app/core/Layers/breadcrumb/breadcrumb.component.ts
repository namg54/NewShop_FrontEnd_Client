import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadlengh = 0;
  constructor(private bread: BreadcrumbService) {
    this.bread.breadcrumbs$.subscribe((b) => {
      this.breadlengh = b.length;
    });
  }
 
}
