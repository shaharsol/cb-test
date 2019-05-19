const util = require('util')
const passowrder = require('../lib/passworder')
module.exports = {
  get: async function(db){
    let users = db.get('users');
    let list = await users.find({});
    return list;
  },
  add: async function(db,data){
    let users = db.get('users');
    data.password = passowrder.hash(data.password)
    let user = users.insert(data,{
      new: true
    });
    return user;
  },
  delete: async function(db,username){
    let users = db.get('users');
    let ret = await users.remove({username: username})
    return ret;
  },
  updatePassword: async function(db,username,password){
    let users = db.get('users');
    let user = users.findOneAndUpdate({
      username: username
    },{
      $set: {
        password: passowrder.hash(password)
      }
    },{
      new: true
    })
    return user
  }
}
