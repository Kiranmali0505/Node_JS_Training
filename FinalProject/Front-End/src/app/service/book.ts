


export class Book {
    
    bookid:string;
    isbn:string;    
    Title: string;
    Author: string;
    description: string;
    pages?:number;
    price:number;
    rating:number;
    votes?:number;
    releaseDate?: string|Date
    cover:string;
    tags?:string[];
    series?:string;
    seriesIndex?:number;

    
  }