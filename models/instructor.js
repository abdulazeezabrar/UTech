const mongoose = require('mongoose');
const { Schema } = mongoose;

const InstructorSchema = new Schema({
  courses:[{type: Schema.Types.ObjectId, ref: 'Course'}],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  about: {type: 'String', default: 'Greate instructor'},
  students: [{type: Schema.Types.ObjectId, ref: 'Student'}]
});

var autoPopulateLead = function(next) {
  this.populate('user', 'firstname lastname -_id');
  next();
};

InstructorSchema.
  pre('findOne', autoPopulateLead).
  pre('find', autoPopulateLead);

module.exports = mongoose.model('Instructor', InstructorSchema);
