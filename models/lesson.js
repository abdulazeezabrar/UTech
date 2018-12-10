const mongoose = require('mongoose');
const { Schema } = mongoose;

// TODO: add comments to it

const LessonSchema = new Schema({
  content: {type: String, required: true},
  title: {type: String, required: true},
  lessonNumber: {type: Number, unique: [true, 'The lesson number should be unique']}
});

module.exports = mongoose.model('Lesson', LessonSchema);
