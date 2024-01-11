import { IBasket } from "./IBasket.1";
import { IBasketItems } from "./IBasketItems";
import{v4 as uuidv4}from 'uuid'

export class Basket implements IBasket{
    id = uuidv4();//guid
    items: IBasketItems[]=[];
}
