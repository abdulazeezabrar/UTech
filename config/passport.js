const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then( user => {
      user.password = undefined;
      done(null, user)
    })
    .catch( err => done(err) )
});

passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({email: email})
    .then( user => {
      if(user){
        if (!user.comparePassword(password)) {
          return done('Password dose not match', false);
        } else {
          user.password = undefined;
          return done(null, user);
        }
      } else {
        return done('email dose not exsit', false);
      }
    })
    .catch(err => done(err));
}));
