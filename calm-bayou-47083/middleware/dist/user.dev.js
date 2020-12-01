"use strict";

var mongoClient = require('mongodb').MongoClient;

var bcrypt = require('bcrypt');

var string = randomString(10);
var dbURL = 'mongodb+srv://apoorv_dham:Ad2810@123@cluster0.npypv.mongodb.net/guvi_students?retryWrites=true&w=majority';

isUserValid = function isUserValid(req, res, next) {
  var client, db, result, salt, hash;
  return regeneratorRuntime.async(function isUserValid$(_context) {
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
          _context.next = 7;
          return regeneratorRuntime.awrap(db.collection('users').find({
            'email': req.body.email.toUpperCase()
          }).toArray());

        case 7:
          result = _context.sent;

          if (!(result.length === 0)) {
            _context.next = 12;
            break;
          }

          res.status(400).json({
            'message': 'user not found'
          });
          _context.next = 23;
          break;

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 14:
          salt = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(bcrypt.hash(string, salt));

        case 17:
          hash = _context.sent;
          _context.next = 20;
          return regeneratorRuntime.awrap(db.collection('users').updateOne({
            'email': req.body.email.toUpperCase()
          }, {
            $set: {
              'string': hash
            }
          }));

        case 20:
          res.locals.tempString = string;
          res.locals.email = result[0].email;
          next();

        case 23:
          _context.next = 28;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);
          res.status(500);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 25]]);
};

isTempStringValid = function isTempStringValid(req, res) {
  var _req$body, email, password, client, db, result, hashedString, stringRes;

  return regeneratorRuntime.async(function isTempStringValid$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log(req.body);
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context2.next = 5;
          return regeneratorRuntime.awrap(mongoClient.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 5:
          client = _context2.sent;
          db = client.db('bcrypt');
          _context2.next = 9;
          return regeneratorRuntime.awrap(db.collection('users').find({
            'email': email.toUpperCase()
          }).toArray());

        case 9:
          result = _context2.sent;
          hashedString = result[0].string;
          _context2.next = 13;
          return regeneratorRuntime.awrap(bcrypt.compare(password, hashedString));

        case 13:
          stringRes = _context2.sent;

          if (!stringRes) {
            _context2.next = 20;
            break;
          }

          _context2.next = 17;
          return regeneratorRuntime.awrap(db.collection('users').updateOne({
            'email': email.toUpperCase()
          }, {
            $set: {
              'tempStringVerified': true
            }
          }));

        case 17:
          res.render('../frontend/changePassword.html', {
            email: email
          });
          _context2.next = 21;
          break;

        case 20:
          res.send('Galat hai bhai!');

        case 21:
          _context2.next = 26;
          break;

        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](0);
          res.status(500);

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 23]]);
};

changePass = function changePass(req, res) {
  var email, password, salt, hash, client, db, x;
  return regeneratorRuntime.async(function changePass$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log(req.body);
          email = req.body.mail;
          password = req.body.String;
          _context3.next = 6;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 6:
          salt = _context3.sent;
          _context3.next = 9;
          return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

        case 9:
          hash = _context3.sent;
          _context3.next = 12;
          return regeneratorRuntime.awrap(mongoClient.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 12:
          client = _context3.sent;
          db = client.db('bcrypt');
          _context3.next = 16;
          return regeneratorRuntime.awrap(db.collection('users').updateOne({
            $and: [{
              'email': email.toUpperCase()
            }, {
              'tempStringVerified': true
            }]
          }, {
            $set: {
              'password': hash,
              "tempStringVerified": false
            }
          }));

        case 16:
          x = _context3.sent;

          if (x.matchedCount !== 0) {
            res.status(200).json({
              'message': 'updated'
            });
          } else {
            res.status(404).json({
              'message': 'galat tareeka hai bhai'
            });
          }

          _context3.next = 23;
          break;

        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3["catch"](0);
          res.status(500);

        case 23:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 20]]);
};

function randomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

module.exports = {
  isUserValid: isUserValid,
  isTempStringValid: isTempStringValid,
  changePass: changePass
};