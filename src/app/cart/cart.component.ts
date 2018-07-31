import { Component, OnInit } from '@angular/core';
import { CartService } from '../ui/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: any[] = [];

  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this._cartService.getCart();
  }

  public deleteFromCart(id: number): void {
    this._cartService.deleteItem(id);
    this.ngOnInit();
  }

}
