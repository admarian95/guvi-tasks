const express = require('express');
const ejs = require('ejs');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
const { generateRandomString, isTokenValid } = require('./helper');
app.use(cors());
app.engine('html', ejs.renderFile);
require('dotenv').config()
app.use(bodyParser.json());
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`running on ${PORT}`));



app.get('/urlsDashboard', isTokenValid, async (req, res) => {
    try {
        let client = await mongoClient.connect(process.env.DB_URL1, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('urldb');
        let p = await db.collection('urls').aggregate([
            {
                $group: {
                    _id: {
                        date: {
                            $dayOfMonth: "$date"
                        },
                    },
                    count: {
                        $sum: 1
                    }
                }
            }
        ]).toArray();
        res.status(200).json({ "payload": p })
    } catch (err) {
        res.status(500).json({ 'message': 'internal server error' });
    }
})


app.get('/urls', isTokenValid, async (req, res) => {
    try {
        let client = await mongoClient.connect(process.env.DB_URL1, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('urldb');
        let result = await db.collection('urls').find({}).toArray();
        res.status(200).json({ 'payload': result });
    } catch (err) {
        console.log(err);
    }
})

app.get('/:email/tempStringVerify', (req, res) => {
    res.render(__dirname + '/frontend/forgotPwd/newPass.html');
});

app.get('/:extURl', async (req, res) => {
    try {
        let url = `https://arcane-oasis-81949.herokuapp.com${req.originalUrl}`;
        let client = await mongoClient.connect(process.env.DB_URL1, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('urldb');
        let result = await db.collection('urls').findOne({ 'shortUrl': url });
        let mainUrl = result.longURl;
        res.redirect(mainUrl);
    } catch (err) {
        res.status(500).json({ 'message': 'internal server error' });
    }
})
app.post('/register', async (req, res) => {
    console.log(process.env.DB_URL2)
    try {
        let client = await mongoClient.connect(process.env.DB_URL2, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('url-user');
        let { password, email, firstName, lastName } = req.body;
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        await db.collection('users').insertOne({ 'firstName': firstName, 'lastName': lastName, 'email': email.toUpperCase(), "password": hash, "accountActivated": false });

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
            html: `<a> Login using : https://arcane-oasis-81949.herokuapp.com/${req.body.email}/verify </a>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ 'message': 'user inserted .. check mail for activation link !' })
            }
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({ 'message': err });
    }
});

app.get('/login',(req,res)=>{
    res.render(__dirname + '/frontend/login/index.html' );
})
app.get('/:email/verify', async (req, res) => {
    const { email } = req.params;
    try {
        let client = await mongoClient.connect(process.env.DB_URL2, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('url-user');
        await db.collection('users').findOneAndUpdate({ 'email': email.toUpperCase() }, { $set: { 'accountActivated': true } });
        res.redirect('https://vigilant-goodall-75c5c9.netlify.app'); // redirect to login page heroku..
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})
app.post('/login', async (req, res) => {
    try {
        let client = await mongoClient.connect(process.env.DB_URL2, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('url-user');
        let { password, email } = req.body;
        console.log(req.body);
        let result = await db.collection('users').findOne({ 'email': email.toUpperCase() });
        console.log(result);
        let hash = result.password;
        let accountActivated = result.accountActivated;
        let comp = await bcrypt.compare(password , hash);
        if (comp && accountActivated) {
            let token = jwt.sign(
                {
                    userId: result._id,
                    email: result.email
                },
                process.env.JWT_SECRET,
                { expiresIn: '5min' }
            )
            console.log(token)
            res.status(200).json({ 'token': token });

        } else if (!accountActivated) {
            res.status(404).json({ 'message': 'account not activated' });
        }
        else {
            res.status(404).json({ 'message': 'invalid creds!' });
        }
    } catch (err) {
        res.status(500);
    }
});


app.post('/accessRoute', (req, res) => {
    let token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET , (err, dec) => {
        if (dec)
            res.send('valide user');
        else
            res.send('invalid user');
    }
    )
});

app.post('/shortenURL', isTokenValid, async (req, res) => {
    let baseUrl = 'https://arcane-oasis-81949.herokuapp.com/';
    let addUrl = generateRandomString(10);
    baseUrl += addUrl;
    try {
        let { url } = req.body;
        let client = await mongoClient.connect(process.env.DB_URL1, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('urldb');
        await db.collection('urls').insertOne({ "longURl": url, "shortUrl": baseUrl, "date": new Date() });
        res.status(200).json({ 'message': baseUrl });
    } catch (err) {
        res.status(500).json({ 'message': "internal server error" });
    }
})

app.post('/forgotPwdTempStringCreate', async (req, res) => {
    try {
        let client = await mongoClient.connect(process.env.DB_URL2, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('url-user');
        // check if user exists 

        let user = await db.collection('users').findOne({ 'email': req.body.email.toUpperCase() });
        if (user.accountActivated) {
            let tempString = await generateRandomString(10);
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(tempString, salt);
            await db.collection('users').findOneAndUpdate({ 'email': req.body.email.toUpperCase() }, { $set: { 'tempString': hash } });
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'admarian95@gmail.com',
                    pass: 'HALAMADRIDISTA'
                }
            })

            const mailOptions = {
                from: 'admarian95@gmail.com',
                to: req.body.email,
                subject: 'BLAH',
                html: `<p> tempString  : <b> ${tempString} </b>
            <p><a> Login using : https://arcane-oasis-81949.herokuapp.com/${req.body.email}/tempStringVerify </a></p>` //enter netlify URL for temp String verification
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    res.status(404).json({ 'message': 'error occurred !' });
                } else {
                    console.log('Email sent: ' + info.response);
                    res.status(200).json({ 'message': 'user verified and check mail for activation link' });
                }
            });
        }
    } catch (err) {
        res.status(500).json({ 'message': 'error with DB' });
    }
})

app.post('/:email/tempStringVerify', async (req, res) => {
    try {

        let client = await mongoClient.connect(process.env.DB_URL2, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('url-user');
        let { tempString } = req.body;
        let { email } = req.params;
        let result = await db.collection('users').findOne({ 'email': email.toUpperCase() });
        let tempStringDB = result.tempString;
        let comp = await bcrypt.compare(tempString, tempStringDB);
        console.log(comp)
        if (comp) {
            res.status(200).json({ 'message': 'verified' });
        } else {
            res.status(404).json({ 'message': 'not verified' });
        }
    } catch (err) {
        res.status(500).json({ 'message': 'internal server error' });
    }
})

app.post('/createNewPassword', async (req, res) => {

    try {
        let client = await mongoClient.connect(process.env.DB_URL2, { useNewUrlParser: true, useUnifiedTopology: true });
        let db = client.db('url-user');
        let {password,user} = req.body;
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password,salt);

        await db.collection('users').findOneAndUpdate({ 'email': user.toUpperCase() }, { $set: { 'password': hash } });
        res.status(200).json({'message':'password updated'});
    }catch(err){
        res.status(404).json({'message':'cannot update'});
    }
})