

function AddAuthor(id,Name,Biography,Birthdate,Email,PhotographUrl,lstBooks){
   this.id=id;
   this.Name=Name;
   this.Biography=Biography;
   this.Email=Email;
   this.Birthdate=Birthdate;
   this.PhotographUrl=PhotographUrl;
   this.lstBooks=lstBooks;

}
  
   let _author=new AddAuthor(1,'Kiran','ABS','05/05/19960','Kiran.Mali@ltts.com','abc.jpg','Physics');
   console.log(_author);

