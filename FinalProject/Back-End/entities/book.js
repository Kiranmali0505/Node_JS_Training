

class Book{

    
    constructor(bookid,title, Author, Price,cover, Rating ){
        this.bookid=bookid;
        this.Title=title;
        this.Author=Author;
        this.Price=Price;
        this.cover=cover;
        this.Rating=Rating;
    }

    /* note: functions inside class will not have a function prefix */

    toString(){
        return `Book[Id=${this.bookid}\title=${this.title}}]`;
    }
}


module.exports=Book;