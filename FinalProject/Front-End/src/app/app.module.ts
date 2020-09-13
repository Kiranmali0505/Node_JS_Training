//imports from angular framework
import { NgModule } from "@angular/core";

import {RouterModule} from '@angular/router'; 
import {FormsModule} from '@angular/forms'; 
import { ReactiveFormsModule} from '@angular/forms'
import {HttpBackend, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

//imports from my own code
import { BooksWebAppComponent} from "./books-web-app.component";
import {BooksWebHeaderComponent} from './books-web-header-component/books-web-header.component';
import {BooksWebFooterComponent} from './books-web-footer.component'; 
import { BookListComponent } from './book-list/book-list.component';
import { CaRangeComponent } from './ca-range/ca-range.component';
import { CaRatingComponent } from './ca-rating/ca-rating.component';
import { AltvaluePipe } from './altvalue.pipe';
import { PrefixPipe } from './prefix.pipe';
import {BookService} from './service/books/book.service';
import { RatingadvisePipe } from './ratingadvise.pipe';


//get the route details
import {appRoutes} from './routes';
import { CaNotFoundComponent } from './ca-not-found/ca-not-found.component';
import { BookCreateComponent } from './book-create/book-create.component';

import { CaHighlightDirective } from './ca-highlight.directive';
import { CaRainbowColorDirective } from './ca-rainbow-color.directive'; 



import { AuthorListComponent } from './author-list/author-list.component'; 
import {AuthorService} from './service/authors/author.service';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { BookInfoComponent } from './book-info/book-info.component';





@NgModule({

    imports:[
        BrowserModule,  //most important angular module to enable component rendering
        FormsModule,
        CommonModule,
        //responsible for angular Single Page Routing design
        //You must load the RouterModule and supply the route information to be used
        //all functinalities are included
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        ReactiveFormsModule
    ],

    declarations:[ //list all the components and other elements related to current module
        BooksWebAppComponent,
        BooksWebHeaderComponent,
        BooksWebFooterComponent,
        BookListComponent,
         CaRangeComponent,
         AuthorListComponent,
        CaRatingComponent,
        
        AltvaluePipe,
        
        PrefixPipe,
        
        RatingadvisePipe,
        CaNotFoundComponent,
        
        BookCreateComponent,   
        CaHighlightDirective, 
        CaRainbowColorDirective, AuthorCreateComponent, AuthorInfoComponent, BookInfoComponent, 
        
    ],    
    
    //set of services for dependency injection
    providers:[
      
        BookService,AuthorService
    ],

    bootstrap:[  //startup compoent for the module
        BooksWebAppComponent   //only root component should be in bootstrap
    ]
})
export class AppModule{

}