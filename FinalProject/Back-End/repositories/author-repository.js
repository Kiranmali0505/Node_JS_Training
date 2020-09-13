let Author=require('../entities/author');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const username= process.env.BMS_DB_USERNAME; 
const password= process.env.BMS_DB_PASSWORD;
const server=process.env.BMS_DB_SERVER;
const dbname='AuthorDb';
const collectionName='author';
const uri=`mongodb+srv://Kiran:Kiran1996@nodejs.aukn9.mongodb.net/AuthorDb?retryWrites=true&w=majority`;
//const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

class AuthorRepository{

    constructor(){
        
    }

    async getAuthorCollection(){
        await client.connect();
        return  await client.db(dbname).collection(collectionName);
    }

    async getAll(){
        
        let collection =await this.getAuthorCollection();
        return await collection.find().toArray();
    
    }

    async add(author){
       let collection=await this.getAuthorCollection();
        collection.insert(author);
       
    }

    async getById(id){
       
        let collection=await this.getAuthorCollection();
        let author =await collection.findOne({id:id});
        return author;
    }

    async remove(id){
       let collection=await this.getAuthorCollection();
       await collection.deleteOne({id:id});
    }
    async update(id,author){
       
        let collection=await this.getAuthorCollection();
        let checkauthor =await collection.findOne({id:id});
        collection.update(author);
    }

}


module.exports=AuthorRepository;