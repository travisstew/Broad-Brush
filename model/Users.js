const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email:{
    unique: true,
    type: String,
    required: true
  },
  password:{
    required:true,
    type:String,
    
  },
  name:{
    type:String
  },
  bio:{
    type: String
  },
  category:{
    type: String
  },
  pic:{
    type:String
  },
  artwork:[{name:{type:String},pic:{type:String}}],

  profileImg: {
    type: String
},
zip:{type:String},
city:{type:String}
});

UserSchema.methods.isCorrectPassword = function(password,callback){
  bcrypt.compare(password, this.password, function(err, same){
      if(err){
        callback(err);
      }
      else{
        callback(err,same);
      }
  });
};

UserSchema.pre('save', function (next) {
  if(this.isNew || this.isModified('password')){
    //save the reference to this, scope change 
    const document = this;
    bcrypt.hash(document.password, 10, function (err, hashedPassword) { 
      if(err) {
        next(err);
      }
      else{
        document.password = hashedPassword;
        next();
      }
     });
  }else{
    next();
  }
});




const User = mongoose.model('User',UserSchema);

module.exports = User;