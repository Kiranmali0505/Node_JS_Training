
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from '../book';
const baseUrl = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(  private http: HttpClient) { }

  
  getBooks(){
    return this.http.get<Book[]>(`${baseUrl}`+'books');
  }
  getBooksById(bookid: string) {
    return this.http.get<Book>(`${baseUrl}` +'books'+'/'+'details'+'/'+bookid);
  }

  createBooks(books: Book) {
    return this.http.post(`${baseUrl}`+'books'+'/'+ 'create'+'/',books);
    
  }

  updateBooks(books: Book) {
    return this.http.post('${baseUrl}'+ 'Books'+'/'+ books.bookid, books);
    
      }

  deleteBooks(id: string) {
    return this.http.delete(`${baseUrl}`+'Books'+'/'+'delete'+'/'+id);
  }
}
