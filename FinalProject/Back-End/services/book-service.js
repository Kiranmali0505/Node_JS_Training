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
           
        }
    }

    async getAll(){
        let books=await this.bookRepository.getAll();
        return books;
    }

    async getById(bookid){
        let books=await this.bookRepository.getById(bookid);
        return books;
    }

    async search(term){
        
        return await this.getAll().filter(a=> contains(a.title,term) || contains(a.cover,term));
    }

    async remove(id){
        await this.bookRepository.remove(id);
        
    }
    async update(id,book){
        let checkbook=await this.bookRepository.getById(id);
        if(checkbook!=null){
            if(book && book.title){
                if(!book.id)
                book.id=book.title.toLowerCase().replace(' ','-');
                await this.bookRepository.update(book);
            }
        }
        
        else{
            console.log('book add failed');
        }
    }

}
module.exports=BookService;
