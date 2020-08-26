var getAllBooks=[
    {id :1, Title:'Life',Author:'A', Price:700,coverPageUrl:'abc.jpg', Rating:4.5},
    {id :2, Title:'Mystery',Author:'B', Price:500,coverPageUrl:'abc.jpg', Rating:4} ,
    {id :3, Title:'Failure',Author:'C', Price:600,coverPageUrl:'abc.jpg', Rating:4.7}  
 ]
 function ShowBooksByTitle(Title,getAllBooks){
    if(Title!=null& Title.length>0)
    {
      for(var i=0;i<getAllBooks.length;i++){
       if(getAllBooks[i].Title==Title){
      console.log("Books Details ");
      console.log(`Id : ${getAllBooks[i].id}\t
      Title:${getAllBooks[i].Title}\t
      coverPageUrl:${getAllBooks[i].coverPageUrl}\t
      Price:${getAllBooks[i].Price}\t
      Rating:${getAllBooks[i].Rating}\t
 `);
       }
          
       }
    }
   
 }
 ShowBooksByTitle('Mystery',getAllBooks)