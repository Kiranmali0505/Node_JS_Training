let Author=require('../entities/book');

let contains=function(main,sub){
    return main.toLowerCase().indexOf(sub.toLowerCase())>=0;
}

class BookService{

    constructor(bookRepository){
        this.bookRepository=bookRepository;
    }

    async add(book){
        if(book && book.title){
           
            if(!book.id)
            book.id=book.title.toLowerCase().replace(' ','-');
           
            await this.bookRepository.add(book);
        }
        else{
            //console.log('Book add failed');
        }
    }

    async getAll(){
        let books=await this.bookRepository.getAll();
        return books;
    }

    async getById(id){
        let books=await this.bookRepository.getById(id);
        return books;
    }

    async search(term){
        
        return await this.getAll().filter(a=> contains(a.title,term) || contains(a.cover,term));
    }

    async remove(id){
        await this.bookRepository.remove(id);
        
    }

}
module.exports=BookService;
