const mongoose = require('mongoose')

const DB_URI = 'mongodb://mongo:6SGCbw4YjG8KxLMNGaCr@containers-us-west-14.railway.app:5792'

mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

module.exports = connection
