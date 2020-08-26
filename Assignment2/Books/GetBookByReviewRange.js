var getAllBooks=[
    {id :1, Title:'Life',Author:'A', Price:700,coverPageUrl:'abc.jpg', Rating:4.5},
    {id :2, Title:'Mystery',Author:'B', Price:500,coverPageUrl:'abc.jpg', Rating:4} ,
    {id :3, Title:'Failure',Author:'C', Price:600,coverPageUrl:'abc.jpg', Rating:4.7}  
 ]
 function ShowBooksByReviewRange(min,Max,getAllBooks){
     
    if(min!=null&&Max!=null&&min<Max)
    {
      for(var i=0;i<getAllBooks.length;i++){
       if(getAllBooks[i].Rating>=min && getAllBooks[i].Rating<=Max){
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
 ShowBooksByReviewRange(4.5,4.7,getAllBooks)