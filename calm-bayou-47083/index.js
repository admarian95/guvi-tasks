const express = require('express');
const nodemailer = require("nodemailer");
const { isUserValid , isTempStringValid , changePass} = require('./middleware/user');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 3000;
const mongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb+srv://apoorv_dham:Ad2810@123@cluster0.npypv.mongodb.net/guvi_students?retryWrites=true&w=majority';
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.listen(port, () => console.log(`running on ${port}`));



app.post('/registerUser', async (req, res) => {
    try {
        let client = await mongoClient.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('bcrypt');
        let { password } = req.body;
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        let result = await db.collection('users').insertOne({ 'name': req.body.name, 'email': req.body.email.toUpperCase(), "password": hash ,"tempStringVerified":false});
        res.status(200).json(('user inserted!'));
    } catch (err) {
        res.status(500);
    }

})

app.post('/sendchangePasswordMail', cors(),isUserValid, (req, res) => {
    const { tempString, email } = res.locals;
    console.log(res.locals);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'admarian95@gmail.com',   
            pass: 'HALAMADRIDISTA'
        }
    })

    const mailOptions = {
        from: 'admarian95@gmail.com',
        to: email,
        subject: 'BLAH',
        html: `<p> Your temporary string is : </p> <b>${tempString}<b>
        <p><a> Login using : https://calm-bayou-47083.herokuapp.com/${req.body.email}/checkLocalString </a></p>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({'message':'check your mail!'});
        }
      });
})

app.post('/checkLocalString', isTempStringValid);
app.get('/:id/checkLocalString', (req,res)=>{
res.render(__dirname +'/frontend/checkString.html',{email:req.params.id});
});
app.post('/changePassword', changePass);
