import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [HeaderComponent, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule],
  declarations: [HeaderComponent, SidebarComponent]
})
export class UiModule { }

