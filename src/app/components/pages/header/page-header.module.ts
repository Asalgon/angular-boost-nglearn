import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarTitleComponent } from './utils/navbar-title/navbar-title.component';
import { PageHeaderComponent } from './page-header.component';
import { NavbarTitleModule } from './utils/navbar-title/navbar-title.module';



@NgModule({
  declarations: [
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PageHeaderModule { }
