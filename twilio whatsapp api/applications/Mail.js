const sendMessage = require('../services/sendMessage'),
	  mailer	  = require('../services/mailer');

const DB = require('./DB');

function Mail(number, message, media, mediatype)
{
	const to = message.split('\n')[0].trim();
	const m = message.split('\n').slice(1).join('\n');
	// console.log(to,m,number,media,message)
	// console.log("mediatype at mail.js is ",mediatype)
	mailer(to,number,m,media,mediatype)
		.then(s=>{
			sendMessage(number,s);
			DB.logmessage(number, `You sent a mail to ${to}`);
			})
		.catch(f=>sendMessage(number,f))
}

module.exports=Mail;