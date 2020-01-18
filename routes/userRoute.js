const express = require('express');
const router = express.Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const withAuth = require('../config/middleware');

const db = require('../model');

require('dotenv').config();


// const DIR = './public/';
const DIR = './client/public/img/'

//=====storage====//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});
//======upload=====//
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});

//=== update users profile pic ===//
router.put('/api/user-profile',withAuth,upload.single('profileImg') , (req, res, next) => {  
  // const url = req.protocol + '://' + req.get('host')
  console.log(req.email);
  console.log(req.file.filename);
  
  
  db.User.findOneAndUpdate({email:req.email},
      {
        profileImg: '../img/' +  req.file.filename,
      }).then(function(){ });
    
  res.end();
});
//===update users artwork gallery == //
router.put('/api/user-profile/pics',withAuth, upload.single('artwork'),function(req,res){
  
    db.User.findOneAndUpdate({email:req.email},
      {
        $push:{artwork:{pic:'../img/' +  req.file.filename, name: req.body.name}}
     
    }).then(function(){ });
});


router.post('/register', (req,res)=>{
  const {name,email,password} = req.body;
  console.log(name,email,password);
  
    const newUser = new db.User({
          name: name,
          password: password,
          email: email
    });

    // newUser.save({}).then(user=>{
    //   console.log('success user create');
    // });

    newUser.save(function (err) {
      if(err) {
        res.status(500).send('Error registering user, please try again.')
      }else{
        res.status(200).send('Welcome to Broad Brush')
      }
      });

});

router.post('/signin', function(req, res) {
  const { email, password } = req.body;
  db.User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
          });
        } else {
          // Issue token to user signed in user // 
          const payload = { email };
          const token = jwt.sign(payload, process.env.TOKEN_SIGN, {
            expiresIn: '2h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});

router.get('/checkToken',withAuth, function (req,res) {
  res.sendStatus(200);
});

router.get('/secret',withAuth ,function(req, res) {
  res.send('The password is potato');
});

router.get('/dashboard', withAuth ,function (req,res) {
    //===token with users unique email ***> req.email <**** ===//    
    db.User.findOne({ email:req.email }, function(err, results){
       if(err) throw err;
          res.send(results);
    });
});

//====update users info====//
router.put('/dashboard',withAuth,function (req,res) {
  console.log(req.email);
      db.User.findOneAndUpdate({email:req.email},
        {
        name: req.body.name,
        bio: req.body.bio,
        category: req.body.category,
        zip: req.body.zip
        }).then(function () { });
        
      res.end()
});


router.get('/', function (req,res) {
    //======zip code radius finder =======/////////

    // axios.default('https://www.zipcodeapi.com/rest/Zz1uX0aolXmtTANYIrWceVkKqPgNUVHjZpadQnSV1sLt4iY55ae0cmsxyUgsfY9G/radius.json/23831/10/mile').then(result=>{
    // console.log(result.data);
    //     result.data.zip_codes.forEach(zip => {
    //         console.log(zip.zip_code);
            
    //     });
    //   res.send(result.data)

    //});
});

module.exports = router;