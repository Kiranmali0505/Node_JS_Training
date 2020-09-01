import { Component } from "@angular/core";


@Component({
    selector: 'app-booksweb',  //custom html element or component identifier
    template:
    `
   
    <div class='content container' >
        <app-book-info></app-book-info>
    </div>
    <app-booksweb-footer></app-booksweb-footer>
    `
})
export class BooksWebAppComponent{
    
}