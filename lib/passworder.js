const crypto = require('crypto');
const config = require('config');
const async = require('async');


module.exports = {
	hash: function(password){
		hmac = crypto.createHmac('sha1', config.get('app.password_salt'));
		hmac.update(password);
		var hashed = hmac.digest('hex');
		return hashed;
	},
	verify: function(password,hash){
		var calced = this.hash(password);
		return calced==hash;
	},
}
