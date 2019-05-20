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
    let user = await users.insert(data,{
      new: true
    });
    return user;
  },
  delete: function(db,username){
    let users = db.get('users');
    users.remove({username: username},function(err,ret){
      callback(err,ret)
    })
  },
  updatePassword: function(db,username,password){
    let users = db.get('users');
    users.findOneAndUpdate({
      username: username
    },{
      $set: {
        password: passowrder.hash(password)
      }
    },{
      new: true
    },function(err,user){
      callback(err,user)
    })
    // return user
  }
}
