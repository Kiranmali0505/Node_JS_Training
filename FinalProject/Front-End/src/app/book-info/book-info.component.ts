import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from '../service/book';
import { BookService } from '../service/books/book.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
book:Book;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("bookId");
    console.log("===============================");
    console.log(bookId);
    this.getAuthorByID(bookId);
  
  }
  getAuthorByID(bookId){
    this.bookService.getBooksById(bookId).subscribe(data=>{
      console.log(data);
      this.book=data;
      
    });
  }

}
