import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  public product: Product;

  @Input()
  appHighlight: string;

  @Output()
  public myAddToCart: EventEmitter<Product> = new EventEmitter();

  public addToCart(product: Product): void {
    this.myAddToCart.emit(product);
  }

  @HostListener('mouseenter')
  public onMouseEnter(event) {
    console.log('product mouse');
    console.log(event);

    console.log('highlightColor', this.appHighlight);


  }

  @HostListener('click', ['$event'])
  public onCLick(event) {
    console.log(event);

  }

  @HostListener('mouseleave')
  public onMouseLeave() {
  }
}
