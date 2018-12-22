const router = require('express').Router();
const mongoose = require('mongoose');
const Course = mongoose.model('Course');

// Post on /api/course to Create new Course
router.post('/', (req, res, next) => {
  // TODO: Add course image feture
  const {aboutPage, title, description} = req.body;
  req.checkBody('aboutPage', 'aboutPage is required').notEmpty();
  req.checkBody('title', 'title is required').notEmpty();
  req.checkBody('description', 'description chareters should betwen 0 and 200').isLength({min:1, max: 200});

  // Get the maximan of the length of the title
  req.checkBody('title', 'title should at least 6 chareters').isLength({min: 6});
  const instructor = req.user.type.instructor;
  var course = new Course({
    instructor,
    aboutPage: JSON.stringify(req.body.aboutPage),
    title,
    description,
    publishDate: new Date()
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

// Get /api/courses to fetch all courses
router.get('/', (req, res, next) => {
  console.log('Course response');
  Course.find({}, '-lessons -rates -aboutPage')
    .populate('instructor', "user -_id")
    .then((data) => {
      res.send(data)
    })
    .catch(next);
});


// Get single course
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Course.findById(id)
    .populate('lessons')
    .then((course) => {
      res.send(course);
    });
});

module.exports = router;
