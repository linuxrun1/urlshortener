const mongoose = require('mongoose')

const DB_URI = 'mongodb://mongo:NXDTquE7XyoH1f6Kme7H@containers-us-west-15.railway.app:6802'

mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

module.exports = connection
