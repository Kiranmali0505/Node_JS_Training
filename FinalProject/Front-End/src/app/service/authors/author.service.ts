import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Author } from '../author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:8000/ApiAuthor";

  getAllAuthors(){
    return this.http.get<Author[]>(this.baseurl );
  }

  getAuthorId(id: string){
    return this.http.get<Author>(this.baseurl + '/'+ 'details' + '/' + id);
  }

  addAuthor(author: Author){
    return this.http.post(this.baseurl + '/'+ 'create', author);
  }

  deleteAuthor(id: string){
    return this.http.delete(this.baseurl + '/'+ 'delete' + '/' + id);
  }

  updateAuthor(author: Author){
    return this.http.put(this.baseurl + 'update' + '/' + author.id, author);
  }
}
