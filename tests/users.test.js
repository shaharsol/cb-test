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
  })
})

test('a 2nd user record with the same username should be rejected',() => {
  users.add(db,{
    username: 'shaharsol',
    first_name: 'shahar',
    last_name: 'sol',
    password: '123456'
  })
  .then((user) => {

  })
  .catch((err) => {
    expect(err).toBeTruthy()
  })

})

test('user list should contain 1 record',() => {
  users.get(db)
  .then((list) => {
    expect(list[0].username).toEqual('shaharsol')
  })
  .catch((err) => {
  })
})

test('updatePassword should update the password in db',() => {
  users.updatePassword(db,'shaharsol','654321')
  .then((user) => {
    expect(user.password).toEqual(passowrder.hash('654321'))
  })
  .catch((err) => {
  })
})

test('remove user should work',() => {
  users.delete(db,'shaharsol')
  .then((ret) => {
    expect(ret.deletedCount).toEqual(1)
  })
  .catch((err) => {
  })
})
