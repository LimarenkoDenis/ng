import { Component, HostListener, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Cart } from './interface/interfaces';
import { Observable, of, Subscription } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { delay, switchMap } from 'rxjs/operators';
import { CartService } from './ui/services/cart.service';
import { ProductService } from './ui/services/product.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  public searchControl: FormControl = new FormControl('', [Validators.required, Validators.email, this.checkEmail], [this.checkAsyncEmail]);
  public products$: Observable<Product[]>;
  public products: Product[];
  public sub: Subscription;
  public limit = 2;
  public options = {
    _page: 1,
    _limit: 2
  };

  public constructor(
    private _cartService: CartService,
    private _productService: ProductService,
  ) {
  }

  public ngOnInit() {
    // this.searchControl.valueChanges.pipe(
    //   switchMap((value: string) => this._productService.getProducts({text: value})),
    // );
    this.getProducts(this.options);
    this.sub = this._productService.getProducts(this.options).subscribe((products: Product[]) => {
      this.products = products;
    });
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

  public ngAfterViewInit() {
    // DOM
  }

  public changePage(event: PageEvent) {
    this.getProducts({ _page: event.pageIndex++, _limit: event.pageSize });
  }

  public getProducts(options: any) {
    this.products$ = this._productService.getProducts(options);
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
