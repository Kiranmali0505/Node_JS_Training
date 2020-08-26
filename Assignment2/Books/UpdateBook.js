var getAllBooks=[
    {id :1, Title:'Life',Author:'A', Price:700,coverPageUrl:'abc.jpg', Rating:4.5},
    {id :2, Title:'Mystery',Author:'B', Price:500,coverPageUrl:'abc.jpg', Rating:4} ,
    {id :3, Title:'Failure',Author:'C', Price:600,coverPageUrl:'abc.jpg', Rating:4.7}  
 ]
function UpdateBooks(ID,getAllBooks){
    if(ID!=null& ID>0)
    {
      for(var i=0;i<getAllBooks.length;i++){
       if(getAllBooks[i].id==ID){
     
        getAllBooks[i].Title="Updated Title"
      console.log(`Id : ${getAllBooks[i].id}\t
        Name:${getAllBooks[i].Title}`);
       }
          
       }
    }
}
UpdateBooks(1,getAllBooks)