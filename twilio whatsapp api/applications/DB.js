const sendMessage = require('../services/sendMessage'),
	  db 		  = require('../services/models/index');

function logmessage(number, message){
	db.Users.findOne({number:number})
		.then(user=>{
			user.logs.unshift(message); // unshift so it remains at the beginning
			if (user.logs.length>100) { // remove unnecessary outdated logs from the DB
				console.log(user.logs.length);
				user.logs.pop();
			}
			user.save();
		})
		.catch(error=>console.log(error));
}
module.exports.logmessage=logmessage;

module.exports.store=function store(number, message, media){
	db.Users.findOne({number:number})
		.then(user=>{
			if (message) {
				user.messages.unshift(message);
			}
			if (media) {
				user.media.unshift(media);
			}
			user.save();
			sendMessage(number, "_Sucessfully saved to your account_");
		})
		.catch(error=>sendMessage(number, 'Please login to start saving your messages'));
}

module.exports.login=function login(number) {
	console.log('generating otp');
	const otp = Math.floor(1000+Math.random()*9000);
	db.Verifications.create({number:number,otp:otp})
		.then(()=>sendMessage(number, 'Your OTP for login is *'+otp+'*\n\n_This OTP is valid for 5 minutes_\nVISIT THE WEBSITE: urlurl'))
		.catch(()=>sendMessage(number, 'Your Login OTP could not be generated\n_Please try again later_'));
	const currentDate = new Date();
	logmessage(number, `Attempted login at ${currentDate}`);
}