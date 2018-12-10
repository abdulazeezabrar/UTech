const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
  courses:[{type: Schema.Types.ObjectId, ref: 'Course'}],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  readLater: [{type: Schema.Types.ObjectId, ref: 'Lesson'}]
});

module.exports = mongoose.model('Student', StudentSchema);
