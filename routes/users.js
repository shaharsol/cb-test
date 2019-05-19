var express = require('express');
var router = express.Router();
const users = require('../models/users')

router.get('/', function(req, res, next) {
  users.get(req.db)
  .then((list) => {
    res.json(list)
  })
  .catch((err) => {
    res.send(500).status(err)
  })
});

router.post('/', function(req, res, next) {
  users.add(req.db,req.body)
  .then((user) => {
    res.json(user)
  })
  .catch((err) => {
    res.send(500).status(err)
  })
});

router.delete('/:username', function(req, res, next) {
  users.delete(req.db,req.params.username)
  .then((ret) => {
    res.json(ret)
  })
  .catch((err) => {
    res.send(500).status(err)
  })
});

router.patch('/password/:id', function(req, res, next) {
  users.updatePassword(req.db,req.params.id,req.body.password)
  .then((user) => {
    res.json(user)
  })
  .catch((err) => {
    res.send(500).status(err)
  })
});

module.exports = router;
