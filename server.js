var express = require('express');
var app = express();
// for serving gzipped files
var gzippo = require('gzippo');

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
