const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

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
  console.log(req.email);
      db.User.findOneAndUpdate({email:req.email},
        {
        name: req.body.name,
        bio: req.body.bio,
        category: req.body.category,
        zip: req.body.zip
        }).then(function () { });
        
      res.end();
});
router.get('/api/gallery',function(req,res){
    // db.User.find('artwork',function (err,result) {
    //   res.send(result)
      
    //   });
      db.User.find({}).select("-password").populate("artwork").then(function (r) {
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

module.exports = router;