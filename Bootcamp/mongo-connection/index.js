import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
const mongoClient = MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017';
const objectId = ObjectID;

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.listen(port,()=>console.log(`server is running on ${port}`));

app.post('/add-user',async (req,res)=>{
    try{
        let client = await mongoClient.connect(dbUrl);
        let db = client.db('students');
        let result  = await db.collection('user').insertOne(req.body);
        res.status(200).json({result});
        client.close();
    }catch{
        res.send(500);
    }
})

app.get('/users',async (req,res)=>{
    try{
        let client = await mongoClient.connect(dbUrl);
        let db = client.db('students');
        let result  = await db.collection('user').find().toArray();
        res.status(200).json({result});
        client.close();
    }catch{
        res.send(500);
    }
})

app.get('/user/:id',async (req,res)=>{
    try{
        console.log(objectId(JSON.stringify(req.params.id)));
        let client = await mongoClient.connect(dbUrl);
        let db = client.db('students');
        let result  = await db.collection('user').findOne({ '_id' : objectId(req.params.id)});
        res.status(200).json({result});
        client.close();
    }catch(error){
        console.log(error);
        res.send(500);
    }
})
 