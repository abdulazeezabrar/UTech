const mongoose = require('mongoose');
const { Schema } = mongoose;

const InstructorSchema = new Schema({
  courses:[{type: Schema.Types.ObjectId, ref: 'Course'}],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  about: {type: 'String', default: 'Greate instructor'},
  students: [{type: Schema.Types.ObjectId, ref: 'Student'}]
});

module.exports = mongoose.model('Instructor', InstructorSchema);
