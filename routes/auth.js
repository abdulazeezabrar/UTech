var passport = require('passport');
var passportConf = require('../config/passport');
var express = require('express');
var router = express.Router();
const User = require('mongoose').model('User');
const Student = require('mongoose').model('Student');
const Instructor = require('mongoose').model('Instructor');



router.post('/login', passport.authenticate('local', {}), (req, res) => {
    res.send({ user: req.user });
  }
);

// when user get logout
router.get('/logout', (req, res,next) => {
  req.logout();
  res.send({user: false});
});


router.get('/current_user', (req, res, done) => {
  if(req.user){
    res.send({user: req.user});
  } else{
    res.status(401).send({Error: 'Plese Login'});
  }
});


router.post('/signup',  (req, res, next) => {
  // Express validator validation
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('firstname', 'firstname is required').notEmpty();
  req.checkBody('lastname', 'lastname is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password', 'passport should at least 6 chareters').isLength({min: 6});
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  req.checkBody('type', 'You should provide us a type of an account')
    .custom((value) => (value == "student" || value == "instructor" ));
  var errors = req.validationErrors();
  // make sure there is no errors
  if(errors){
    res.status(401).send({ Error: errors[0].msg });
  } else {
    //check if existingUser
    User.findOne({email: req.body.email})
      .then(( exsistingUser) => {
        if(exsistingUser){
          // if the email exsit send a error msg with 404 http status
          return res.status(404).send({Error: req.body.email + ' is alerdy exist Login insted'});
        } else {
          new User({
            password: req.body.password,
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
          })
          .save()
            .then((user) => {
              // save create the instructor or student and add user._id to it
              var UserTypeModel = req.body.type === 'student'? Student : Instructor;
              new UserTypeModel({user: user._id}).save()
                .then((UserType) => {
                  // add the instructor or student _id to user object
                  user.type[req.body.type] = UserType._id;
                  user.save()
                    .then( user => {
                      // logIn to the user
                      req.logIn(user,  err => {
                        if(err) return next(err);
                        user.password = undefined;
                        res.status(200).send({user: user});
                      });
                    })
                    .catch(next)
                })
                .catch(next)
            })
            .catch( next )
        }
      });
  }
});

module.exports = router;
