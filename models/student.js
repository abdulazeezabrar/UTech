const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
  courses:[{type: Schema.Types.ObjectId, ref: 'Course'}],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  readLater: [{type: Schema.Types.ObjectId, ref: 'Lesson'}]
});

var autoPopulateLead = function(next) {
  this.populate('user', 'firstname lastname -_id');
  next();
};

StudentSchema.
  pre('findOne', autoPopulateLead).
  pre('find', autoPopulateLead);



module.exports = mongoose.model('Student', StudentSchema);
