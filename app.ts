/// <reference path='typings/node/node.d.ts' />
/// <reference path='typings/express/express.d.ts' />

import http = require("http");
import path = require("path");
import express = require("express");

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(1949, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});