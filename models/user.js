const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, 'This email is alerdy registerd'],
    lowercase: true,
    required: true
  },
  firstname: {type: String,  required: true},
  password: {type: String,  required: true},
  lastname: {type: String, required: true}
});


//Hash THe Password Before we save it to the database
UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Compare the password to the hashed password in the database

UserSchema.methods.comparePassword = function (pass){
  return bcrypt.compareSync(pass, this.password)
}

//exports this module
var User = mongoose.model('User', UserSchema );
module.exports = User;
