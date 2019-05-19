const users = require('../models/users')
const passowrder = require('../lib/passworder')
const config = require('config')
const monk = require('monk');
const db = monk(config.get('mongo.uri'));

test('a user record should be added',() => {
  users.add(db,{
    username: 'shaharsol',
    first_name: 'shahar',
    last_name: 'sol',
    password: '123456'
  })
  .then((user) => {
    expect(user.password).toEqual(passowrder.hash('123456'))
  })
  .catch((err) => {
    console.log(err)
  })
})
