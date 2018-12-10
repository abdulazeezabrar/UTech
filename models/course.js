const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
  lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson'}],
  instructor: {type: Schema.Types.ObjectId, ref: 'Instructor'},
  aboutPage: {type: String, default: '<h1>about the course</h1>'},
  image: String,
  rates: [{
    user: {type: Schema.Types.ObjectId, ref: 'Student'},
    rating: {type: Number, min: 0, max: 5}
  }],
  rating:{
    stars: {type: Number, min: 0, max: 5, default: NaN},
    count: {type: Number, default: 0}
  },
  publishDate: {type: Date}
});

CourseSchema.pre('save', function(next) {
    if (this.isModified('rates') && this.rates.length){
      this.rating = this.getRating(this.rates)
    }
    next();
});

CourseSchema.getRating = function(rates){
  // Get array of number (rates)
  var ratesArray = rates.map(rate => rate.rating);
  // get rates count
  let count = ratesArray.length;
  ratesSum = ratesArray.reduce((previous, current) => current += previous);

  var stars = ratesSum / count;
  return{ stars, count };
}

module.exports = mongoose.model('Course', CourseSchema);
