var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  id: String,
  title: String,
  author: String,
  description: String,
  content: String,
  imageUrl: String,
  created: { type: Date },
  updated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Post', PostSchema)
