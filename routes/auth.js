var passport = require('passport');
var passportConf = require('../config/passport');
var express = require('express');
var router = express.Router();
const User = require('mongoose').model('User');



router.post('/login', passport.authenticate('local', {}), (req, res) => {
    res.send({ user: req.user });
  }
);

// when user get logout
router.get('/logout', (req, res,next) => {
  req.logout();
  res.send({success: 'loged out!'});
});


router.get('/current_user', (req, res) => {
  if(req.user){
    res.send({user: req.user});
  } else{
    res.status(404).send({Error: 'Plese Login'});
  }
});


router.post('/signup',  (req, res, next) => {
  // Express validator validation
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password', 'passport should at least 6 chareters').isLength({min: 6});
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  var errors = req.validationErrors();
  // make sure there is no errors
  if(errors){
    res.status(401).send(errors);
  } else {
    //check if existingUser
    User.findOne({email: req.body.email})
      .then((err, exsistingUser) => {
        if(exsistingUser){
          // if the email exsit send a error msg with 404 http status
          return res.status(404).send({Error: req.body.email + 'is alerdy exist'});
        } else {
          new User({
            password: req.body.password,
            email: req.body.email
          })
          .save()
            .then((user) => {
              req.logIn(user,  err => {
                if(err) return next(err);
                res.status(201).send({user: user});
              });
            })
            .catch((e) => { next(err)})
        }
      });
  }
});

module.exports = router;
