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




module.exports = router;