const BookService  = require("../services/book-service");
const Book=require('../entities/book');
const BookRepository=require('../repositories/book-repository');


let bookRepository=new BookRepository();

var bookService=new BookService(bookRepository);




async function  getBookList(request,response){
    try{ let books=await bookService.getAll();
        await response.send(books);}catch(e){
            response.status(400);
            await response.send(e.message);
            console.log(e.message);
        }
   
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

    let bookid= request.params.bookid; //this should be the last part of url /authors/details/:authorId
console.log(bookid);
    let book=await bookService.getById(bookid);
    if(book)
        await response.send(book);
    else{
        response.status(404); //not found
        await response.send({error: `Book not found`, bookid:bookid});
    }

};

async function removeBook(request,response){
    let id=request.params.bookid;
    await bookService.remove(id);
    response.status(204); //no content
    await response.send({});
}

async function updatebook(request,response){
    let id= request.params.book; 
    let checkbook=await bookRepository.getById(id);
    var book=request.body;
    if(checkbook)
    try{
        await bookRepository.update(id,book);
        response.status(201); //created
        await response.send(author);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
else{
    response.status(404); //not found
    await response.send({error: `Book not found`, id:id});
}
}

var express = require('express');
var router = express.Router();

router.get('/', getBookList);
router.post('/create', addBook);
router.put('/update/:bookid', updatebook);
router.get('/details/:bookid', getBookById);
router.delete('/delete/:bookid', removeBook);



module.exports = router;




