import { ProductService } from './../ui/services/product.service';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product$: Observable<Product>;


  constructor(
    private _router: ActivatedRoute,
    private _productService: ProductService,
  ) { }

  ngOnInit() {
    this._router.data.subscribe((data) => {
      console.log(data);

    });
    this._router.paramMap.subscribe((params: ParamMap) => console.log(params, params.get('id') ));


    this.product$ = this._router.paramMap.pipe(
      switchMap((params: ParamMap) => this._productService.getProduct(params.get('id'))),
    );

    // this.product$ = this._router.params.pipe(
    //   switchMap((params: any) => this._productService.getProduct(params['id'])),
    // );

  }

}
