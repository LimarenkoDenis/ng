import { Injectable } from '@angular/core';
import { Cart } from '../../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Cart[] = [];

  public getCart(): Cart[] {
    return this.cart;
  }

  public addToCart(product: Product): void {
    const item: any = this.cart.find((el: Product) => el.id === product.id);

    if (item) {
      this.cart.push({...product, amount: item.amount + 1});
      return;
    }
    this.cart.push({...product, amount: 1});
  }

  public deleteItem(id: number): void {
    this.cart = this.cart.filter((item: Cart) => item.id !== id);
  }


}
