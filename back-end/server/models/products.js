var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: Text,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  uid:  { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'categories'
  },
  depcrition: {
    type: Text,
    required: true,
  }
});
var User = mongoose.model('products', UserSchema);
module.exports = User;