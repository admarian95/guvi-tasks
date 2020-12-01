"use strict";

var express = require('express');

var nodemailer = require("nodemailer");

var _require = require('./middleware/user'),
    isUserValid = _require.isUserValid,
    isTempStringValid = _require.isTempStringValid,
    changePass = _require.changePass;

var bcrypt = require('bcrypt');

var app = express();
var port = process.env.PORT || 3000;

var mongoClient = require('mongodb').MongoClient;

var dbURL = 'mongodb+srv://apoorv_dham:Ad2810@123@cluster0.npypv.mongodb.net/guvi_students?retryWrites=true&w=majority';

var cors = require('cors');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.listen(port, function () {
  return console.log("running on ".concat(port));
});
app.post('/registerUser', function _callee(req, res) {
  var client, db, password, salt, hash, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoClient.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          client = _context.sent;
          db = client.db('bcrypt');
          password = req.body.password;
          _context.next = 8;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 8:
          salt = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

        case 11:
          hash = _context.sent;
          _context.next = 14;
          return regeneratorRuntime.awrap(db.collection('users').insertOne({
            'name': req.body.name,
            'email': req.body.email.toUpperCase(),
            "password": hash,
            "tempStringVerified": false
          }));

        case 14:
          result = _context.sent;
          res.status(200).json('user inserted!');
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          res.status(500);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
});
app.post('/sendchangePasswordMail', cors(), isUserValid, function (req, res) {
  var _res$locals = res.locals,
      tempString = _res$locals.tempString,
      email = _res$locals.email;
  console.log(res.locals);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'admarian95@gmail.com',
      pass: 'HALAMADRIDISTA'
    }
  });
  var mailOptions = {
    from: 'admarian95@gmail.com',
    to: email,
    subject: 'BLAH',
    html: "<p> Your temporary string is : </p> <b>".concat(tempString, "<b>\n        <p><a> Login using : https://calm-bayou-47083.herokuapp.com/").concat(req.body.email, "/checkLocalString </a></p>")
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        'message': 'check your mail!'
      });
    }
  });
});
app.post('/checkLocalString', isTempStringValid);
app.get('/:id/checkLocalString', function (req, res) {
  res.render(__dirname + '/frontend/checkString.html', {
    email: req.params.id
  });
});
app.post('/changePassword', changePass);