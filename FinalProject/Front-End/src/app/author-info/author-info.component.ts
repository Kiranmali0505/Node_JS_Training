import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Author } from '../service/author';
import {AuthorService  } from '../service/authors/author.service';
@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {
  authors: Author;

  constructor(  private authorService: AuthorService,
    private router: Router) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("authorId");
    
    this.getAuthorByID(authorId);
  
  }

  
  
  getAuthorByID(authorId){
    this.authorService.getAuthorId(authorId).subscribe(data=>{
      console.log(data);
      this.authors=data;
      
    });
  }
}

