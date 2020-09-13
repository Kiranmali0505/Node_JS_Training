import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Author } from '../service/author';
import {AuthorService  } from '../service/authors/author.service';
import { RangeInfo } from '../ca-range/ca-range.component';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[];
  public showImages=true;
  public imageWidth=120;

  constructor(
    private authorService: AuthorService,
     private router: Router) { }

  ngOnInit(): void {
    this.getAllAuhtors();
  }
  toggleImages(){

    this.showImages=!this.showImages;
  }

  getAllAuhtors(): void {
    this.authorService.getAllAuthors().subscribe(data=>{
      this.authors = data;
    });
  };

  addAuthor(): void {
    this.router.navigate(['author/add']);
  }
  getByID(author: Author): void {
    localStorage.removeItem("authorId");
    localStorage.setItem("authorId", author.id);
    this.router.navigate(['author/details']);
    }
  
  deleteAuthor(author: Author){
    
    this.authorService.deleteAuthor(author.id).subscribe(data=>{
    
      this.getAllAuhtors();
    });
  }

  updateAuthor(author: Author){
    localStorage.removeItem("authorId");
    localStorage.setItem("authorId", author.id);
    this.router.navigate(['edit-product']);
  }
  onImageWidthInfoChanged(r: RangeInfo){

    //console.log(r);
    
  }
}
