const AuthorService = require("../services/author-service");
const Author=require('../entities/author');
const AuthorRepository=require('../repositories/author-repository');


let authorRepository=new AuthorRepository();

var authorService=new AuthorService(authorRepository);




async function  getAuthorList(request,response){
    try{ let authors=await authorService.getAll();
        await response.send(authors);}
        catch{  response.status(400);
            await response.send(e.message);
            console.log(e.message);}
   
}

async function addAuthor(request,response){
    var author=request.body;
    try{
        await authorService.add(author);
        response.status(201); //created
        await response.send(author);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}
async function updateAuthor(request,response){
    let id= request.params.authorId; 
    let checkauthor=await authorService.getById(id);
    var author=request.body;
    if(checkauthor)
    try{
        await authorService.update(id,author);
        response.status(201); //created
        await response.send(author);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
else{
    response.status(404); //not found
    await response.send({error: `author not found`, id:id});
}
    
}
async function getAuthorById(request,response){

    let id= request.params.authorId; //this should be the last part of url /authors/details/:authorId

    let author=await authorService.getById(id);
    if(author)
        await response.send(author);
    else{
        response.status(404); //not found
        await response.send({error: `author not found`, id:id});
    }

};

async function removeAuthor(request,response){
    let id=request.params.authorId;
    await authorService.remove(id);
    response.status(204); //no content
    await response.send({});
}



var express = require('express');
var router = express.Router();

//all this will be mapped /authors/
router.get('/', getAuthorList);

router.post('/create', addAuthor);
router.put('/update/:authorId', updateAuthor);
router.get('/details/:authorId', getAuthorById);
router.delete('/delete/:authorId', removeAuthor);



module.exports = router;




