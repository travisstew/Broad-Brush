const express =  require('express');
const mongoose = require('mongoose');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

//mongoose config 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/newsScrap';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false}).then(()=>{
  console.log('mongo connected');
}).catch(err=>{
  console.log(err);
});

//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });