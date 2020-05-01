const readFile 	  = require('../services/readFile'),
	  writeFile   = require('../services/writeFile'),
	  sendMessage = require('../services/sendMessage');

const DB = require('./DB'),
	Joke = require('./Joke');

function registerCommand(number,message){
	readFile()
		.then(commands=>{
			let command = commands.find(c=>c.number===number)
			if (!command)
				writeFile(commands,message,number);
			else{
				writeFile(commands,message,number,command); // if command already exist, then overwrite it
			}
		})
		.catch(error=>console.log(error));
}

let m = '';
function checkCommand(number,message){
	message = message.toLowerCase();
	switch (message) {
		case "hi":
		case "hey":
		case "hello":
			m=`Welcome To *WhatsTer*!!!\n\n_Following are the commands which you can type to perform the desired action:_\n`
			m+="\nType <```login```> to login to your account in the website urlurl.com"
			m+="\nType <```mail```> to send an email"
			m+="\nType <```clarifai```> to do image recognition";
			m+="\nType <```joke```> to get a random joke";
			m+="\n\nBy default, if you forward or send any media or message (besides the commands), we will save it in your WhatsTer account at urlurl.com"
			break;
		case "login":
			DB.login(number);
			break;
		case "mail":
			m="*Type receiver's mail in this format*\n```example@example.com```\n```<next line> Your message here```\n\n_Mail your attachment by directly sending it here_\n_Provide a caption if you want to include a message with your attachment_"
			registerCommand(number,message);
			break;
		case "clarifai":
			m="Now send an image";
			registerCommand(number,message);
			break;
		case "prompt":
			m="_The following message will be prompted_"; //just for fun
			registerCommand(number,message);
			break;
		case "joke":
			Joke(number);
			return true;
			break;
		default:
			console.log('no switch matched');
			return false;
	}
	if (m) {
		sendMessage(number,m);
	}
	return true;
}

module.exports=checkCommand;