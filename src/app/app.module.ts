import { UiModule } from './ui/ui.module';
import { SearchModule } from './search/search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { TestComponent } from './test/test.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { HighlightDirective } from './highlight.directive';
import { AclDirective } from './acl.directive';
import { SearchPipePipe } from './search-pipe.pipe';
import { AsyncSearchPipePipe } from './async-search-pipe.pipe';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    TestComponent,
    ProductsComponent,
    ProductComponent,
    HighlightDirective,
    AclDirective,
    SearchPipePipe,
    AsyncSearchPipePipe
  ],
  imports: [
    BrowserModule,
    SearchModule,
    UiModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
