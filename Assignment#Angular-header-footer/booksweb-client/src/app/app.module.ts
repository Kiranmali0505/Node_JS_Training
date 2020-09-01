import { NgModule } from "@angular/core";
import { BooksWebAppComponent} from "./books-web-app.component";
import { BrowserModule} from '@angular/platform-browser';
import {BooksWebFooterComponent} from './books-web-footer.component'; 
import {BookListComponent} from './book-list.component';
import { BookInfoComponent } from './book-info/book-info.component'; 


 

@NgModule({

    imports:[
        BrowserModule  //most important angular module to enable component rendering
    ],

    declarations:[ //list all the components and other elements related to current module
        BooksWebAppComponent,
       
        BooksWebFooterComponent,
        BookListComponent,
        BookInfoComponent
        
    ],    
    
    bootstrap:[  //startup compoent for the module
        BooksWebAppComponent   //only root component should be in bootstrap
    ]
})
export class AppModule{

}