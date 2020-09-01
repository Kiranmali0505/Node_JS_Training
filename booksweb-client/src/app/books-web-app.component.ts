import { Component } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule} from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
@Component({
  selector: 'app-books',
  templateUrl: '<h1>Books</h1>',
  styleUrls: ['./app.component.css']
})
export class BooksWebAppComponent {
  title = 'booksweb-client';
}
