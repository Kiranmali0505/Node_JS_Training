import {Component} from '@angular/core'

@Component({
    selector: 'app-booksweb-footer',
    styles:[
        `        
            .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #007bff;
                color: white;
                text-align: center;
            }
            a {
                color: #fafcff;
                text-decoration: none;
                background-color: transparent;
              
            }
        `
    ],
    templateUrl:'book-web-footer.component.html'
})
export class BooksWebFooterComponent{
}