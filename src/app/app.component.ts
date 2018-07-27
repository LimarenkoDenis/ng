import { Component, HostListener, OnInit } from '@angular/core';
import {Cart } from './interface/interfaces';
import { Observable, of } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchControl: FormControl = new FormControl('lim@gmail.com',
   [Validators.required, Validators.email, this.checkEmail], [this.checkAsyncEmail]);
  public date: Date = new Date();
  public exampleText: string = 'hi';
  red = 'red';

  public products: Product[] = [
    {
      "id": 0,
      "title": "Cola",
      "description": "descr",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 12,
      "type": "drink"
    },
    {
      "id": 1,
      "title": "Pepsi",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 10,
      "type": "drink"
    },
    {
      "id": 2,
      "title": "Pepsi cola",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 11,
      "type": "drink"
    },
    {
      "id": 3,
      "title": "Big Mac",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.Sdwch_BigMac.png",
      "price": 22,
      "type": "sandwich"
    },
    {
      "id": 4,
      "title": "Big Tasty",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.Sdwch_BigTasty.png",
      "price": 45,
      "type": "sandwich"
    },
    {
      "id": 5,
      "title": "pie",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.MuffinBlackberry.png",
      "price": 10,
      "type": "dessert"
    },
    {
      "id": 6,
      "title": "chocolate",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 22,
      "type": "dessert"
    },
    {
      "id": 7,
      "title": "ice cream",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 45,
      "type": "dessert"
    },
    {
      "id": 8,
      "title": "Orange juice small",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.JuiceOrangeSmall.png",
      "price": 45,
      "type": "drink"
    },
    {
      "id": 9,
      "title": "Coffee 'Late' small",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.CoffeeLatteSmall.png",
      "price": 45,
      "type": "drink"
    }
  ];
  public cart: any[] = [];
  public products$: Observable<number[]> = of([1, 2, 3, 4, 5]);

  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    price: new FormControl('', [Validators.pattern(/[0-9]/)]),
  });
  public formArray: FormArray = new FormArray([this.searchControl, new FormControl()]);



  public fb: FormGroup = this._fb.group({
    title: ['', [Validators.required, Validators.email]],
    description: [''],
    price: [''],
    type: [''],
    photo: ['']
    // array: this._fb.array([this.searchControl]),
    // account: this._fb.group({
    //   name: [''],
    //   email: ['']
    // })
  });


  public fbControl: FormControl = this._fb.control('');

  public constructor(
    private _fb: FormBuilder,
  ) {}

  public ngOnInit() {
    this.searchControl.valueChanges.subscribe((value: string) => {
      console.log(this.searchControl);
    });
  }

  public addToCart(product: Product) {
    const item: any = this.cart.find((el: Product) => el.id === product.id);

    if (item) {
      this.cart.push({...product, amount: item.amount + 1});
      return;
    }
    this.cart.push({...product, amount: 1});
  }

  public get valid () {
    return 1;
  }

  public save() {
    console.log(this.fb);

    this.products.push({ ...this.fb.value, id: this.products.length });

  }

  // public disable(): void {
  //   this.searchControl.setValidators([Validators.maxLength(10), Validators.requiredTrue]);
  //   this.searchControl.disable();
  // }

  public checkAsyncEmail(): Observable<{ [key: string]: any } | null> {
    // this.http.post()
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
