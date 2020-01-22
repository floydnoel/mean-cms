var mongoose = require('mongoose')

var CategorySchema = new mongoose.Schema({
  id: String,
  name: String,
  content: String,
  imageUrl: String,
  updated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Category', CategorySchema)
