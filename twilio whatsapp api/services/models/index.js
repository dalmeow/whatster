const mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.connect(process.env.DB_URL,{
	useNewUrlParser:true, 
	useUnifiedTopology:true,
	useFindAndModify:false,
	useCreateIndex:true
});

mongoose.Promise = Promise;

module.exports.Verifications = require('./verifications');

module.exports.Users 		 = require('./users');