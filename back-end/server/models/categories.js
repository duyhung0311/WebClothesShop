var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: Text,
    required: true,
  },
  depcrition: {
    type: Text,
    required: true,
  }
});
var User = mongoose.model('categories', UserSchema);
module.exports = User;