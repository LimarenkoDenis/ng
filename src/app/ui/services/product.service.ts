import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private _http: HttpClient
  ) { }

  public getProducts(options: any): Observable<Product[]> {
    console.log(options);
    // ?_page=1&_limit=2
    const params: HttpParams = new HttpParams({
      fromObject: options
    });

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Autorization', 'Bearer toten324234234234234');


    return this._http.get<Product[]>(`${environment.url}products`, { params });
  }

  public getProduct(id: string): Observable<Product> {
    return this._http.get<Product>(`${environment.url}products/${id}`);
  }

  public createProduct(product: Product): Observable<Product> {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Autorization', 'Bearer toten324234234234234');


    return this._http.post<Product>(`${environment.url}products`, product).pipe(
      map((item: Product) => {
        item.price = item.price * 2;
        return item;
      })
    );
  }
}
