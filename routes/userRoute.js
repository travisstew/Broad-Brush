const express = require('express');
const router = express.Router();

const db = require('../model');


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

module.exports = router;