import {Route} from '@angular/router'; 
import {BookListComponent} from './book-list/book-list.component'; 

import {CaNotFoundComponent} from './ca-not-found/ca-not-found.component'; 
import { BookCreateComponent } from './book-create/book-create.component';

import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorCreateComponent} from './author-create/author-create.component'
import {AuthorInfoComponent} from './author-info/author-info.component';
import {BookInfoComponent} from './book-info/book-info.component';
export const appRoutes:Route[]=[
    
    {path: '',  pathMatch:'full',component: BookListComponent },
    {path: 'book/list', component: BookListComponent },
    {path: 'book/add', component: BookCreateComponent},
    {path: 'author/list', component: AuthorListComponent },
    {path: 'author/add', component: AuthorCreateComponent },
    {path:'author/details',component:AuthorInfoComponent},
    {path:'book/details',component:BookInfoComponent},
    {path: '404', component:CaNotFoundComponent},

   //define a catch all route. must be your last route
   //no other routes would be processed after this one
    {path:'**', component:CaNotFoundComponent}

];

