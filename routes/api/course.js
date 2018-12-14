const router = require('express').Router();
const mongoose = require('mongoose');
const Course = mongoose.model('Course');

// Post on /api/course to Create new Course
router.post('/', function(req, res, next) {
  // TODO: Add course image feture
  const {aboutPage, title} = req.body;
  const instructor = req.user._id;
  req.checkBody('aboutPage', 'aboutPage is required').notEmpty();
  req.checkBody('title', 'title is required').notEmpty();
  // Get the maximan of the length of the title
  req.checkBody('title', 'title should at least 6 chareters').isLength({min: 6});
  var course = new Course({
    instructor, aboutPage, title, publishDate: new Date()
  });

  var errors = req.validationErrors();
  // make sure there is no errors
  if(errors){
    res.status(401).send({ Error: errors[0].msg });
  } else {
    course.save()
      .then((newCourse) => {
        res.send({newCourse});
      })
      .catch(next);
  }
});

module.exports = router;
