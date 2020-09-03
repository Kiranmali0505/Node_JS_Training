const BookService  = require("../services/book-service");
const Book=require('../entities/book');
const BookRepository=require('../repositories/book-repository');


let bookRepository=new BookRepository();

var bookService=new BookService(bookRepository);




async function  getBookList(request,response){
    let books=await bookService.getAll();
    await response.send(books);
}

async function addBook(request,response){
    var book=request.body;
    try{
        await bookService.add(book);
        response.status(201); //created
        await response.send(book);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}

async function getBookById(request,response){

    let id= request.params.bookId; //this should be the last part of url /authors/details/:authorId

    let book=await bookService.getById(id);
    if(book)
        await response.send(book);
    else{
        response.status(404); //not found
        await response.send({error: `Book not found`, id:id});
    }

};

async function removeBook(request,response){
    let id=request.params.bookId;
    await bookService.remove(id);
    response.status(204); //no content
    await response.send({});
}



var express = require('express');
var router = express.Router();

//all this will be mapped /authors/
router.get('/', getBookList);
router.post('/create', addBook);
router.get('/details/:bookId', getBookById);
router.delete('/delete/:bookId', removeBook);



module.exports = router;




