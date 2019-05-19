var express = require('express');
var router = express.Router();
const users = require('../models/users')

router.get('/', function(req, res, next) {
  users.get(req.db).then((list) => {
    res.json(list)
  })
});

router.post('/', function(req, res, next) {
  users.add(req.db,req.body).then((user) => {
    res.json(user)
  })
  // res.json(user)
});

router.delete('/:id', function(req, res, next) {
  users.delete(req.db,req.params.id).then((ret) => {
    res.json(ret)
  })
});

router.patch('/password/:id', function(req, res, next) {
  users.updatePassword(req.db,req.params.id,req.body.password).then((user) => {
    res.json(user)
  })
});

module.exports = router;
