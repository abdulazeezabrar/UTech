const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then( user => done(null, user) )
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
          return done(null, false);
        }
      } else {
        return done(null, false);
      }
    })
    .catch(err => done(err));
}));
