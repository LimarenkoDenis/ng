import { CartModule } from './cart/cart.module';
import { UiModule } from './ui/ui.module';
import { SearchModule } from './search/search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { TestComponent } from './test/test.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    TestComponent,
    ProductsComponent,
    ProductComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    UiModule,
    ReactiveFormsModule,
    FormsModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
