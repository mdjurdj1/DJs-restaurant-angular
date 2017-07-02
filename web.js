var gzippo = require('gzippo');
var express = require('express');
var path = require('path')
var app = express();

app.use(express.static(path.join(__dirname, '/app')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));
app.listen(process.env.PORT || 5020);
