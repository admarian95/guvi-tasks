const  express = require('express');
const  MongoClient =  require('mongodb').MongoClient;
const port = process.env.PORT || 3000;
const app = express();
const dbURL = `mongodb+srv://apoorv_dham:Ad2810@123@cluster0.npypv.mongodb.net/guvi_students?retryWrites=true&w=majority`;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port ,()=>console.log(`Running on port : ${port}`));

app.post('/addStudent',async (req,res)=>{
    try{
    let client = await MongoClient.connect(dbURL , { useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('guvi_students');
    console.log(req.body);
    let result  = await db.collection('student').insertOne(req.body);
    res.status(200).json({result});
    client.close();
    }catch(err){
        console.log(err);
        res.send(500);
    }

});

app.post('/addMentor',async (req,res)=>{
    try{
    let client = await MongoClient.connect(dbURL ,{ useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('guvi_students');
    let result  = await db.collection('mentor').insertOne(req.body);
    res.status(200).json({result});
    client.close();
    }catch(err){
        console.log(err);
        res.send(500);
    }

})

app.post('/addStudentsToMentor',async (req,res)=>{
    try{
    let client = await MongoClient.connect(dbURL ,{ useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('guvi_students');
    // let students = req.body.students_name.filter(el=>{
    //     if(db.collection('student').findOne({$and:[{"name":el},{"mentor_name":"NA"}]}))
    //     return el;
    // });
    let students = req.body;
    // console.log(students)
    // let result  = await  db.collection('mentor').insertOne({"mentor_name":mentor,"students":students});
      students.forEach(async el=>{
        let client = await MongoClient.connect(dbURL ,{ useNewUrlParser: true, useUnifiedTopology: true });
         (db.collection('student').findOneAndUpdate({"name":el.name},{$set:{"mentor_name":el.mentor_name}}));
        client.close();
    })
    res.status(200).json({"message":"Assignment successful"});
    }catch(err){
        console.log(err);
        res.send(500);
    }
})

app.put('/changeMentor',async (req,res)=>{
    try{
    let mentor = req.body.mentor_name;
    let client = await MongoClient.connect(dbURL ,{ useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('guvi_students');
    let student = req.body.student_name;
     await  (db.collection('student').findOneAndUpdate({"name":student},{$set:{"mentor_name":mentor}}));
    res.status(200).json({"message":"Update successful"});
    client.close();
    }catch(err){
        console.log(err);
        res.send(500);
    }
})

app.post('/getStudents',async (req,res)=>{
    try{
    let mentor = req.body.data;
    let client = await MongoClient.connect(dbURL ,{ useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('guvi_students');
    let students = [];
    students =  await  db.collection('student').find({"mentor_name":mentor}).project({name:1,_id:0}).toArray();    
    students.length !==0 ?res.status(200).json({students}) : res.status(200).json({"message":"No Student Assigned yet!"})
    client.close();
    }catch(err){
        console.log(err);
        res.send(500);
    }
})

app.get('/getAllStudents',async (req,res)=>{
    try{
    let client = await MongoClient.connect(dbURL ,{ useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('guvi_students');
    let students = [];
    students =  await  db.collection('student').find({}).project({_id:0}).toArray();    
   res.status(200).json({students});
    client.close();
    }catch(err){
        console.log(err);
        res.send(500);
    }
});
app.get('/showAllMentors',async (req,res)=>{
    try{
    let client = await MongoClient.connect(dbURL ,{ useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('guvi_students');
    let students = [];
    students =  await  db.collection('mentor').find({}).project({_id:0}).toArray();    
   res.status(200).json({students});
    client.close();
    }catch(err){
        console.log(err);
        res.send(500);
    }
});
app.get('/getAllNAStudents',async (req,res)=>{
    try{
    let client = await MongoClient.connect(dbURL ,{ useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('guvi_students');
    let students = [];
    students =  await  db.collection('student').find({"mentor_name":"NA"}).project({_id:0}).toArray();    
   res.status(200).json({students});
    client.close();
    }catch(err){
        console.log(err);
        res.send(500);
    }
})