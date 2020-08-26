var getAllAuthors=[
    {id :1, Name:'Kiran',Biography:'ABS',Birthdate:'05/05/19960', Email:'Kiran.Mali@ltts.com',PhotographUrl:'abc.jpg', lstBooks:["Physics","Chemistry","Maths"]},
    {id :2, Name:'Adem',Biography:'ABS',Birthdate:'05/05/19960', Email:'Kiran.Mali@ltts.com',PhotographUrl:'abc.jpg', lstBooks:["Physics-A","Chemistry-B","Maths-C"]} ,
    {id :3, Name:'lara',Biography:'ABS',Birthdate:'05/05/19960', Email:'Kiran.Mali@ltts.com',PhotographUrl:'abc.jpg', lstBooks:["Physics-P","Chemistry-Q","Maths-R"]}  
 ]
 function ShowAuthorByName(Name,getAllAuthors){
    if(Name!=null& Name.length>0)
    {
      for(var i=0;i<getAllAuthors.length;i++){
       if(getAllAuthors[i].Name==Name){
      console.log("Authors Details ");
      console.log(`Id : ${getAllAuthors[i].id}\t
 Name:${getAllAuthors[i].Name}\t
 Biography:${getAllAuthors[i].Biography}\t
 Birthdate:${getAllAuthors[i].Birthdate}\t
 Email:${getAllAuthors[i].Email}\t
 PhotographUrl:${getAllAuthors[i].PhotographUrl}\t
 `);
       }
          
       }
    }
   
 }
 ShowAuthorByName('Kiran',getAllAuthors)