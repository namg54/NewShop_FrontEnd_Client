import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { IBasket } from '../shared/models/IBasket.1';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../shared/models/IProduct';
import { IBasketItems } from '../shared/models/IBasketItems';
import { Basket } from '../shared/models/Basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private backendUrl = environment.backendUrl;
  //basket readonly
  private basketItems = new BehaviorSubject<IBasket>(null); //next
  basketItems$ = this.basketItems.asObservable(); //subscribe

  constructor(private http: HttpClient) {}

  getBasket(id: string) {
    return this.http.get<IBasket>(`${this.backendUrl}/basket/${id}`).pipe(
      map((basket) => {
        this.basketItems.next(basket);
        return basket;
      })
    );
  }
  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(`${this.backendUrl}/basket/`, basket).pipe(
      map((basket) => {
        this.basketItems.next(basket);
        return basket;
      })
    );
  }
  deleteBasket(id: string) {
    //TODO
  }
  getCurrentBasketSource() {
    return this.basketItems.getValue();
  }
  addItemToBasket(product: IProduct, quantity = 1) {
    // S SOLID
    //product convert to IBasketItem
    const itemToAdd: IBasketItems = this.mapProductToBasketItem(product, quantity);
    //Exists Basket
    const basket = this.getCurrentBasketSource() ?? this.createbasket();
    //IBasketItem add Basket
    basket.items = this.addOrUpdateBasketItems(itemToAdd, basket.items, quantity);
    //create basket send  request to back
    this.setBasket(basket);
  }
  private mapProductToBasketItem(product: IProduct, quantity: number): IBasketItems {
    return {
      id: product.id,
      brand: product.productBrand,
      discount: 0,
      pictureUrl: product.pictureUrl,
      price: product.price,
      product: product.title,
      type: product.productType,
      quantity: quantity
    };
  }
  private createbasket() {
    const basket = new Basket();
    localStorage.setItem('basket_Item', basket.id);
    return basket;
  }
  private addOrUpdateBasketItems(itemToAdd: IBasketItems, items: IBasketItems[], quantity: number): IBasketItems[] {
    const index = items.findIndex((x) => x.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }
}
