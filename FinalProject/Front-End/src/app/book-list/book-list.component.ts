import { Component, OnInit } from '@angular/core';
import {Book} from '../service/book'; 
import { Router } from '@angular/router';

import { RangeInfo } from '../ca-range/ca-range.component';

import { BookService } from '../service/books/book.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public showImages=true;
  public books: Book[];
  public imageWidth=120;
  

  constructor(
    private bookService: BookService, private router:Router
  ) { 


  }

  ngOnInit(): void {
    this.getBooks();
  }

  toggleImages(){

    this.showImages=!this.showImages;
  }
  getBooks(): void {
    this.bookService.getBooks().subscribe(data=>{
      console.log(data);
      this.books = data;
    });
   
  };
 
  addBooks(): void {
    this.router.navigate(['book/add']);
  }

  getByID(book: Book): void {
    localStorage.removeItem("bookId");
    localStorage.setItem("bookId", book.bookid);
    console.log("******************")
    console.log(book.bookid)
    this.router.navigate(['book/details']);
    }
  
  deleteBooks(books: Book){
    
    this.bookService.deleteBooks(books.bookid).subscribe(data=>{
      console.log(data);
      this.getBooks();
    });
  }

  updateProduct(books: Book){
    localStorage.removeItem("bookId");
    localStorage.setItem("bookId", books.bookid);
    this.router.navigate(['/book/add']);
  }

  onImageWidthInfoChanged(r: RangeInfo){

  }
  

}
