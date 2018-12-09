const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
  courses:[{type: Schema.Types.ObjectId, ref: 'Course'}],
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Instructor', StudentSchema);
