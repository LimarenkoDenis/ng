import { ServicesGuard } from './ui/services/services.guard';
import { CartComponent } from './cart/cart.component';
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
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

const routes: Routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  {
    path: 'cart',
    canLoad: [ServicesGuard],
    // TODO check can find module when build with --prod
    loadChildren: './cart/cart.module#CartModule'
    // component: CartComponent,
    // data: { title: 'Cart' },
    // children: [
    //   { path: ':id', component: ProductDetailComponent }
    // ]
  },
  { path: 'cart/:id', component: ProductDetailComponent, data: { title: 'Product detail' } },
  { path: 'form', component: FormComponent, data: { title: 'Form' }, canActivate: [ServicesGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    TestComponent,
    ProductsComponent,
    ProductComponent,
    FormComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    UiModule,
    ReactiveFormsModule,
    FormsModule,
    CartModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
