const nodemailer = require('nodemailer');

async function mailer(to,number,message,media=null,mediatype=null){
	const promise = new Promise((resolve,reject)=>{
		const transport = nodemailer.createTransport({
			service:process.env.MAIL_SERVICE,
			auth:{
				user:process.env.MAIL_USER,
				pass:process.env.MAIL_PASSWORD
			}
		});
		const mailOptions={
			to:to,
			from: process.env.MAIL_USEREMAIL,
			subject: `Mail from ${number}`,
			html: `<div><h1>MAIL FROM ${number.toUpperCase()}</h1><section style="border: 5px solid lightgreen;border-radius: 5px;padding: 10px;margin: 10px; box-shadow: 3px 3px 5px 6px #ccc;">${message.toString()}</section></div>`,
		};
		if (media) {
			mailOptions['attachments']=[{
				path:media, 
				contentType:mediatype,
				filename:`attachment.${mediatype.split('/')[1]}` // mediatype split because otherwise the file will have extension *(null)
				}
			] //there can be no MediaUrl0
		}
		console.log('the mail OPTIONS ARE:',JSON.stringify(mailOptions));
		transport.sendMail(mailOptions,e=>{
			console.log('error at mailer', e);
			e?reject('Mail could not be sent'):resolve(`Mail was sent to ${to}`);
		})
	});
	const response = await promise;
	return response;
}

module.exports=mailer;