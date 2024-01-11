import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { Subscription } from 'rxjs';
import { IBasket } from '../shared/models/IBasket.1';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit,OnDestroy {
 sub$ = new Subscription();
data:IBasket;
  constructor(private basket: BasketService) {}
  ngOnDestroy(): void {
this.sub$.unsubscribe();  }
  ngOnInit(): void {
    // this.getBasket();
  }
  private getBasket() {
    debugger;

    const sub$ = this.basket.getBasket('test').subscribe((res) => {
      console.log(res);
    });
    this.sub$.add(sub$);

  }
}
