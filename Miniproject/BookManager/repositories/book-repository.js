let Author=require('../entities/book');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const username= process.env.BMS_DB_USERNAME; 
const password= process.env.BMS_DB_PASSWORD;
const server=process.env.BMS_DB_SERVER;

const dbname='BooksDb';
const collectionName='book';

const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;



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

    async getById(id){
      
        let collection=await this.getBookCollection();
        let book =await collection.findOne({id:id});
        return book;
    }

    async remove(id){
       let collection=await this.getBookCollection();
       await collection.deleteOne({id:id});
    }

}


module.exports=BookRepository;