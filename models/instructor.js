const mongoose = require('mongoose');
const { Schema } = mongoose;

const InstructorSchema = new Schema({
  courses:[{type: Schema.Types.ObjectId, ref: 'Course', default: false}],
  user: {type: Schema.Types.ObjectId, ref: 'User', default: false},
});

module.exports = mongoose.model('Student', InstructorSchema);
