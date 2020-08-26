var getAllAuthors=[
   {id :1, Name:'Kiran',Biography:'ABS',Birthdate:'05/05/19960', Email:'Kiran.Mali@ltts.com',PhotographUrl:'abc.jpg', lstBooks:["Physics","Chemistry","Maths"]},
   {id :2, Name:'Adem',Biography:'ABS',Birthdate:'05/05/19960', Email:'Kiran.Mali@ltts.com',PhotographUrl:'abc.jpg', lstBooks:["Physics-A","Chemistry-B","Maths-C"]} ,
   {id :3, Name:'lara',Biography:'ABS',Birthdate:'05/05/19960', Email:'Kiran.Mali@ltts.com',PhotographUrl:'abc.jpg', lstBooks:["Physics-P","Chemistry-Q","Maths-R"]}  
]
 function ShowAllAuthor(lstAuthor){
    for(var i=0;i<lstAuthor.length;i++){
       console.log(`List of Author : ${lstAuthor[i].Name}`)
    }

 }

 ShowAllAuthor(getAllAuthors)