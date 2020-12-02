// 1. require mongoose
const mongoose = require('mongoose')
// 2. connect
mongoose.connect('mongodb://localhost/CNPMMM')
// 3. tao Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})
// 4. tao Models
const user = mongoose.model('user', userSchema)
// 5. CRUD
user.create({
    name: "ti",
    age: 15
})

