const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  } 
});
UserSchema.pre("save",async function(next){
    const user=this;
    if(!this.isModified('password')){
        next();
    }
    const hashPassword=await bcrypt.hash(user.password,10);
    this.password=hashPassword;
})

module.exports= mongoose.model('UserAuth', UserSchema);
