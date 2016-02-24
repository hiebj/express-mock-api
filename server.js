'use strict';
const express = require('express'),
  router = require('./mock-api/endpoints');

server(process.argv[2]);

function server(port = 8080) {
  express()
    .use(router)
    .listen(port);
}
