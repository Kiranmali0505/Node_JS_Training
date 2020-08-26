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
function addAuthor(_author){
console.log("Added Author Details Are :");
console.log(`Id : ${_author.id}\t
 Name:${_author.Name}\t
 Biography:${_author.Biography}\t
 Birthdate:${_author.Birthdate}\t
 Email:${_author.Email}\t
 PhotographUrl:${_author.PhotographUrl}\t
 `);
   
    
}
//Calling function
addAuthor(author)

