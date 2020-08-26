var getAllAuthors=[
    {id :1, Name:'Kiran',Biography:'ABS',Birthdate:'05/05/19960', Email:'Kiran.Mali@ltts.com',PhotographUrl:'abc.jpg', lstBooks:["Physics","Chemistry","Maths"]},
    ]
function UpdtaeAuthor(ID,getAllAuthors){
    if(ID!=null& ID>0)
    {
      for(var i=0;i<getAllAuthors.length;i++){
       if(getAllAuthors[i].id==ID){
     
      getAllAuthors[i].Name="Updated Author"
      console.log(`Id : ${getAllAuthors[i].id}\t
        Name:${getAllAuthors[i].Name}`);
       }
          
       }
    }
}
UpdtaeAuthor(1,getAllAuthors)