const mongoose = require('mongoose');

const MONGOURI = 'mongodb://localhost/utech';

function init(){
  mongoose.connect( MONGOURI ,{ useNewUrlParser: true });

  // MongoDb connection status events
  mongoose.connection.on('connected', () => {
    console.log("App connected to MONGODB");
  });
  mongoose.connection.on('error', (err) => {
    console.log('error happend white connecting to MONGODB' + err);
  });

  // Require mongoose Schema
  require('./user');
  require('./student');
  require('./instructor');
  require('./course');
  require('./lesson');
}


module.exports = mongoose;
module.exports.init = init;
