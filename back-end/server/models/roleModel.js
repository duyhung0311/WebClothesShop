let mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name : {
    type: String,
    required: true
  }
});
Role=mongoose.model('Role', RoleSchema);
module.exports = Role;