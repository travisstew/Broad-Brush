const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const axios = require('axios');

require('dotenv').config();


const withAuth = require('../config/middleware');
const db = require('../model');

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "profile",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});
  const parser = multer({ storage: storage });


router.put('/api/images',withAuth, parser.single("profileImg"), (req, res) => {
  db.User.findOneAndUpdate({email:req.email},
    {
      profileImg: req.file.url,
    }).then(function(){ });
res.end();

});

router.put('/api/user-profile/artwork',withAuth, parser.single('artwork'),function(req,res){
  
  db.User.findOneAndUpdate({email:req.email},
    {
      $push:{artwork:{pic:req.file.url, name: req.body.name }}
  }).then(function(){ });
});

router.get('/api/dashboard', withAuth ,function (req,res) {
  //===token with users unique email ***> req.email <**** ===//    
  db.User.findOne({ email:req.email }, function(err, results){
     if(err) throw err;
        res.send(results);
  });
});
//====update users info====//
router.put('/api/dashboard',withAuth,function (req,res) {
  // console.log(req.email);
  // axios.default(`https://www.zipcodeapi.com/rest/Zz1uX0aolXmtTANYIrWceVkKqPgNUVHjZpadQnSV1sLt4iY55ae0cmsxyUgsfY9G/info.json/${req.body.zip}/degrees`).then(result=>{ 
    // const city = `${result.data.city},${result.data.state}`
    console.log(req.body.category);
    
        db.User.findOneAndUpdate({email:req.email},
                {
                name: req.body.name,
                bio: req.body.bio,
                category: req.body.category,
                zip: req.body.zip,
                // city: city
                }).then(function () { });                
              res.end();

    // });


     
});
router.get('/api/gallery',function(req,res){
  
      db.User.find({category: "painting"}).then(function (r) {
        console.log(r);
        res.send(r)     
    });
});
router.get('/api/photo',function(req,res){
  
      db.User.find({category: "photo"}).then(function (r) {
        console.log(r);
        res.send(r)     
    });
});
router.get('/api/sculpting',function(req,res){
  
      db.User.find({category: "sculpting"}).then(function (r) {
        console.log(r);
        res.send(r)     
    });
});
router.get('/api/architecture',function(req,res){
  
      db.User.find({category: "architecture"}).then(function (r) {
        console.log(r);
        res.send(r)     
    });
});

router.put('/api/delete',withAuth,function (req,res) {
  db.User.findOneAndUpdate({email:req.email},
    {$pull:{artwork:{_id:req.body.id}}}
    ).then(function () {
      console.log('deleted');
      
     });
    
  res.end();
});

router.get('/api/profile/:id', function (req,res) {
      console.log(req.params.id);
      db.User.findById(`${req.params.id}`).then(e=>{
        console.log(e);
        res.send(e)
});
        
    
});
router.post('/api/zip', function(req,res){

   axios.default(`https://www.zipcodeapi.com/rest/Zz1uX0aolXmtTANYIrWceVkKqPgNUVHjZpadQnSV1sLt4iY55ae0cmsxyUgsfY9G/radius.json/${req.body.zip}/15/mile`).then(result=>{
     console.log(result.data);     
    res.send(result.data)
   
    });

  // axios.default(`https://www.zipcodeapi.com/rest/Zz1uX0aolXmtTANYIrWceVkKqPgNUVHjZpadQnSV1sLt4iY55ae0cmsxyUgsfY9G/info.json/${req.body.zip}/degrees`).then(result=>{ 
  //        const city = `${result.data.city},${result.data.state}`
  // });


});
module.exports = router;