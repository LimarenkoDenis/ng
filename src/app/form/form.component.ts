import { ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { CartService } from '../ui/services/cart.service';
import { ProductService } from '../ui/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public title;
  public fb: FormGroup = this._fb.group({
    title: ['', [Validators.required]],
    description: [''],
    price: [''],
    type: [''],
    photo: ['']
  });


  public constructor(
    private _fb: FormBuilder,
    private _cartService: CartService,
    private _productService: ProductService,
    // private _ActivatedRouteSnapshot: ActivatedRouteSnapshot
  ) {
  }


  public ngOnInit(): void {
    // this.title = this._ActivatedRouteSnapshot.data['title'];
  }
  public save(): void {
    this._productService.createProduct(this.fb.value).subscribe((product: Product) => {
      console.log(product);

    });
  }

}
