var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: Text,
    required: true,
  },
  email: {
    type: Text,
    required: true,
  },
  phone:{
    type: String,
    required: true,
  },
  role:
  { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Role'
  },
  userAddress: {
    type: Text,
    required: true,
  }
});
var User = mongoose.model('users', UserSchema);
module.exports = User;