var createError = require('http-errors');
var express = require('express');
const db = require("./config/sequelize");
var indexRouter = require('./routes/index');
var app = express();
app.use('/', indexRouter);
module.exports = app;
