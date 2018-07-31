import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }

  public createProduct(product: Product): void {
    this.products.push({...product, id: this.products.length });
  }
}
