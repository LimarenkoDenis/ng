import { Component, HostListener, OnInit } from '@angular/core';
import {Cart } from './interface/interfaces';
import { Observable, of } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { CartService } from './ui/services/cart.service';
import { ProductService } from './ui/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchControl: FormControl = new FormControl('', [Validators.required, Validators.email, this.checkEmail], [this.checkAsyncEmail]);
  public products: Product[] = [];

  public constructor(
    private _cartService: CartService,
    private _productService: ProductService,
  ) {}

  public ngOnInit() {
    this.products = this._productService.getProducts();
  }

  public addToCart(product: Product) {
    this._cartService.addToCart(product);
  }

  public checkAsyncEmail(): Observable<{ [key: string]: any } | null> {
    return of({ isValidEmail: true }).pipe(
      delay(3000)
    );
  }

  public checkEmail(control: FormControl): {[key: string]: any} | null {
    console.log(control.value );
    if (control.value < 10) {
      return null;
    }
    return { customError: true };

  }

}
