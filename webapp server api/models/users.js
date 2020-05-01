const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	number:	{
		type: String,
		required: 'Whatsapp number cannot be blank',
		unique: true,
	},
	messages: [
		{
			type: String,
		}
	],
	media: [
		{
			type: String
		}
	],
	logs: [
		{
			type: String,
			timestamps:true
		}
	]
});

const User = mongoose.model('User', userSchema);

module.exports=User;