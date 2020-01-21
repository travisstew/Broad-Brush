const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(cookieParser());
//mongoose config 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/broadbrush';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false}).then(()=>{
  console.log('mongo connected');
}).catch(err=>{
  console.log(err);
});
app.use(cors());
//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./routes/userRoute'));
// app.use('/api',require('./routes/user2routes'));

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
      res.sendFile(path.join(__dirname, 'client','build','index.html')); //relative path
    });
}

app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });

//added for image upload 

 app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
      next(new Error('Something went wrong'));
  });
});


app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});