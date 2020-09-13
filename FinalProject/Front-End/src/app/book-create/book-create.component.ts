import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Book } from '../service/book';
import { first } from "rxjs/operators";
import {BookService} from '../service/books/book.service'
import { Router } from '@angular/router';

@Component({
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  public book:Book;
 // private bookService:SimpleBookService=new SimpleBookService();

  constructor(
    private bookService:BookService,
    private router:Router,
    private formBuilder: FormBuilder
  ) { }
  addForm: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      _id: [],
      bookid: ['', Validators.required],
      Title: ['', Validators.required],
      Author: ['', Validators.required],
      cover: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.bookService.createBooks(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['book/list']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}
