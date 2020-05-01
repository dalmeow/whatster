const twilio=require('twilio');

const client = twilio(process.env.accountSid,process.env.authToken);

function sendMessage(usernumber,messagebody,messageimage=[])
{
	client.messages
	  .create({
	  	 mediaUrl: messageimage,
	     from: 'whatsapp:+14155238886',
	     body: messagebody,
	     to: usernumber
	   })
	  .then(message => console.log(message.sid, 'was sent'))
	  .catch(error=>console.error(error.message));	
}

module.exports=sendMessage;