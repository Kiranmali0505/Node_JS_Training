var getAllBooks=[
    {id :1, Title:'Life',Author:'A', Price:700,coverPageUrl:'abc.jpg', Rating:4.5},
    ]
 function DeleteBook(id){
    if(id>0 && id!=null)
    {
        if(getAllBooks.id==id)
        {
            delete getAllBooks
            console.log("delete Successfull");
        }
    }
 
}
//Calling function
DeleteBook(1)