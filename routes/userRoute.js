const express = require('express');
const router = express.Router();
const axios = require('axios');

const multer = require('multer');
const uuidv4 = require('uuid/v4');

const db = require('../model')


// const DIR = './public/';
 const DIR = './client/public/img/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});

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

//route for profile image 
router.put('/api/user-profile/:id', upload.single('profileImg'), (req, res, next) => {  
  const url = req.protocol + '://' + req.get('host')
  db.User.findByIdAndUpdate(`${req.params.id}`,
      {
        profileImg: '../img/' +  req.file.filename,
      }).then(function(){ });
    
  res.end();
});

 

router.post('/register', (req,res)=>{
  const {name,email,password} = req.body;
  console.log(name,email,password);
  
    const newUser = new db.User({
          name: name,
          password: password,
          email: email
    });
    newUser.save({}).then(user=>{
      console.log('success user create');
      
    });
});

router.get('/dashboard/:id',function (req,res) {
        console.log(req.params.id);    
        db.User.findById(req.params.id,function (err,results) { 
          if(err) throw err;
          res.send(results);
       });
});

router.put('/dashboard/:id',function (req,res) {

      db.User.findByIdAndUpdate(`${req.params.id}`,
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