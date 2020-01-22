var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
var cors = require('cors')

var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')
var postRouter = require('./routes/post')
var categoryRoter = require('./routes/category')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/', indexRouter)
// app.use('/users', usersRouter)
app.use('/api/post', postRouter)
app.use('/api/category', categoryRoter)

mongoose
  .connect('mongodb://localhost/cms', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.error(err))

module.exports = app
