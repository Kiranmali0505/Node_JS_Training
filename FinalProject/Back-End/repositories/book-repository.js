let Author=require('../entities/book');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const username= process.env.BMS_DB_USERNAME; 
const password= process.env.BMS_DB_PASSWORD;
const server=process.env.BMS_DB_SERVER;

const dbname='BooksDb';
const collectionName='book';

//const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;
const uri=`mongodb+srv://Kiran:Kiran1996@nodejs.aukn9.mongodb.net/BooksDb?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

class BookRepository{

    constructor(){
        
    }

    async getBookCollection(){
        await client.connect();
        return  await client.db(dbname).collection(collectionName);
    }

    async getAll(){
        let collection =await this.getBookCollection();
        return await collection.find().toArray();
    }

    async add(book){
        let collection=await this.getBookCollection();
        collection.insert(book);
    }

    async getById(bookid){
      
        let collection=await this.getBookCollection();
        let book =await collection.findOne({bookid:bookid});
        return book;
    }

    async remove(bookid){
       let collection=await this.getBookCollection();
       await collection.deleteOne({bookid:bookid});
    }
    async update(bookid,book){
       
        let collection=await this.getAuthorCollection();
        let checkbook =await collection.findOne({bookid:bookid});
        collection.save(book);
    }
}


module.exports=BookRepository;