'use strict';
const fs = require('fs'),
  router = require('express').Router();

router.get('/users/', file('mock-api/Users.json'));
router.get('/users/:name/', file('mock-api/User.json'));
router.post('/users/', created);

router.get('/posts/', file('mock-api/Posts.json'));
router.get('/posts/:id/', file('mock-api/Post.json'));
router.post('/post/', created);

function file(filename) {
  return (request, response) => {
    response.writeHead(200, 'OK');
    fs.createReadStream(filename).pipe(response);
  };
}

function created(request, response) {
  response.writeHead(201, 'Created');
  response.end();
}

module.exports = router;
