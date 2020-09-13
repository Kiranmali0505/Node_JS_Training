import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import {Author} from '../service/author';
import { AuthorService } from '../service/authors/author.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  constructor(
    private authorService:AuthorService,
    private router:Router,
    private formBuilder: FormBuilder
  ) { }
  addForm: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      _id: [],
      Id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      biography: ['', Validators.required],
     
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.authorService.addAuthor(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['author/list']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}
