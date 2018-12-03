var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// In production enviment make the send the react version
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  console.log('Passing the if statemnt');
  const path = require("path");
  app.get("*", (req, res) => {
    console.log('Routing handling');
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
