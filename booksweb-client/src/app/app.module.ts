import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BooksWebAppComponent } from './books-web-app.component';

@NgModule({
  declarations: [
    BooksWebAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BooksWebAppComponent]
})
export class AppModule { }
