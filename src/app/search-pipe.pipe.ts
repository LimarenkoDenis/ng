import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  // pure: false
})
export class SearchPipePipe implements PipeTransform {

  public transform(products: Product[], textSearch?: string): Product[] {
    // console.log('value', value);
    // console.log('args',args);
    if (!textSearch) {
      return products;
    }
    return products.filter((product: Product) => {
      return product.title.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase()) ||
        product.description.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase());


      // return `${product.title.toLocaleLowerCase()}${product.description.toLocaleLowerCase()}`.includes(textSearch.toLocaleLowerCase());
    });
  }

}
