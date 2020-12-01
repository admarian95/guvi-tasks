const mongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
const string = randomString(10);
const dbURL = 'mongodb+srv://apoorv_dham:Ad2810@123@cluster0.npypv.mongodb.net/guvi_students?retryWrites=true&w=majority';
isUserValid =async (req,res,next)=>{
    try{
        let client  = await  mongoClient.connect(dbURL , { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('bcrypt');
        let result = await db.collection('users').find({'email':req.body.email.toUpperCase()}).toArray();
        if(result.length === 0){
            res.status(400).json({'message':'user not found'});
        }else{
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(string,salt);
            await db.collection('users').updateOne({'email':req.body.email.toUpperCase()},{$set:{'string':hash}});
            res.locals.tempString = string;
            res.locals.email = result[0].email;
            next();
        }
}catch(err){
    res.status(500);
}
}

isTempStringValid = async (req,res)=>{
    try{
        console.log(req.body);
       let {email,password } = req.body;
        let client  = await  mongoClient.connect(dbURL , { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('bcrypt');
        let result = await db.collection('users').find({'email':email.toUpperCase()}).toArray();
        let hashedString = result[0].string;
        let stringRes = await bcrypt.compare(password,hashedString);
        if(stringRes){
         await db.collection('users').updateOne({'email':email.toUpperCase()},{$set:{'tempStringVerified':true}});

         res.render('../frontend/changePassword.html',{email:email});
        }else{
            res.send('Galat hai bhai!')
        }

    }catch(err){
        res.status(500);
    }
}

changePass = async (req,res)=>{
    try{
        console.log(req.body);
    let email = req.body.mail;
    let password = req.body.String;
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password,salt);
    let client  = await  mongoClient.connect(dbURL , { useNewUrlParser: true, useUnifiedTopology: true });
    let db = client.db('bcrypt');
    let x = await db.collection('users').updateOne({$and:[{'email':email.toUpperCase()},{'tempStringVerified':true}]},{$set:{'password':hash,"tempStringVerified":false}})
    if(x.matchedCount !== 0){
        res.status(200).json({'message':'updated'});
    }else{
        res.status(404).json({'message':'galat tareeka hai bhai'});
    }
    }catch(err){
        res.status(500);
    }
}

function randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

module.exports = {isUserValid , isTempStringValid ,changePass} ;