

class Book{

    
    constructor(id,title, Author, Price,cover, Rating ){
        this.id=id;
        this.title=title;
        this.Author=Author;
        this.Price=Price;
        this.cover=cover;
        this.Rating=Rating;
    }

    /* note: functions inside class will not have a function prefix */

    toString(){
        return `Book[Id=${this.id}\title=${this.title}}]`;
    }
}


module.exports=Book;