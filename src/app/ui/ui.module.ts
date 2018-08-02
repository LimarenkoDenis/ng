import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CartService } from './services/cart.service';
import { HighlightDirective } from './directives/highlight.directive';
import { AclDirective } from './directives/acl.directive';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { AsyncSearchPipePipe } from './pipes/async-search-pipe.pipe';
import { ProductService } from './services/product.service';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    HeaderComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    SidebarComponent,
    HighlightDirective,
    AclDirective,
    SearchPipePipe,
    AsyncSearchPipePipe,
    MatPaginatorModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HighlightDirective,
    AclDirective,
    SearchPipePipe,
    AsyncSearchPipePipe,
  ],
  providers: [
    CartService,
    // ProductService,
   ]
})
export class UiModule { }

