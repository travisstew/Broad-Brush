const express = require('express');
const router = express.Router();
const axios = require('axios');


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