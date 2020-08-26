//Created author object for adding new author details 
let author= {
    id :1,
    Name:'Kiran',
    Biography:'ABS',
    Birthdate:'05/05/19960',
    Email:'Kiran.Mali@ltts.com',
    PhotographUrl:'abc.jpg',
    lstBooks:["Physics","Chemistry","Maths"]
 
 }
 
 
 //Showing newly added Author Deatils 
 function DeleteAuthor(id){
     if(id>0 && id!=null)
     {
         if(author.id==id)
         {
             delete author
             console.log("delete Successfull");
         }
     }
  
 }
 //Calling function
 DeleteAuthor(1)