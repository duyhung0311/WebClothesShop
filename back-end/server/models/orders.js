var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: Text,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  prices: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  reviews: {
    type: Text,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
    $min: 1,
    $max: 5,
  },
  userAddress: {
    type: Text,
    required: true,
  }
});
var User = mongoose.model('orders', UserSchema);
module.exports = User;