let Author=require('../entities/author');

let contains=function(main,sub){
    return main.toLowerCase().indexOf(sub.toLowerCase())>=0;
}

class AuthorService{

    constructor(authorRepository){
        this.authorRepository=authorRepository;
    }

    async add(author){
        if(author && author.name){
            console.log('author is added', author.name);
            if(!author.id)
                author.id=author.name.toLowerCase().replace(' ','-');
            if(!author.books)
                author.books=[];
            await this.authorRepository.add(author);
        }
        else{
            console.log('author add failed');
        }
    }

    async getAll(){
        let authors=await this.authorRepository.getAll();
        return authors;
    }

    async getById(id){
        let author=await this.authorRepository.getById(id);
        return author;
    }

    async update(id,author){
        let checkauthor=await this.authorRepository.getById(id);
        if(checkauthor!=null){
            if(author && author.name){
                if(!author.id)
                    author.id=author.name.toLowerCase().replace(' ','-');
                if(!author.books)
                    author.books=[];
                await this.authorRepository.update(author);
            }
        }
        
        else{
            console.log('author add failed');
        }
    }

    async search(term){
        
        return await this.getAll().filter(a=> contains(a.name,term) || contains(a.biography,term));
    }

    async remove(id){
        await this.authorRepository.remove(id);
        
    }

}
module.exports=AuthorService;
