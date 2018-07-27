import { UiModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MysearchComponent } from './mysearch/mysearch.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [SearchComponent],
  declarations: [SearchComponent, MysearchComponent]
})
export class SearchModule { }
