import { UiModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: CartComponent },
];

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class CartModule { }
