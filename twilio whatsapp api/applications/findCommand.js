const readFile = require('../services/readFile'),
	  writeFile= require('../services/writeFile');

const sendMessage = require('../services/sendMessage');

const DB 			 = require('./DB'),
	  ImageRecognize = require('./ImageRecognize'),
	  Mail 			 = require('./Mail');

function findCommand(number,message,media=null,mediatype=null){
	readFile()
		.then(commands=>{
			let command = commands.find(c=>c.number===number);
			if (command)
			{
				const switchcommand=command.message;
				writeFile(commands,"",number,command);
				executeCommand(switchcommand, number, message, media, mediatype);
			}
			else
				DB.store(number, message, media); // by default storing in DB
		})
		.catch(error=>console.log(error));
}

function executeCommand(switchcommand,number,message,media,mediatype){
	switch (switchcommand.toLowerCase()) {
		case "clarifai":
			ImageRecognize(media, number);
			break;
		case "mail":
			Mail(number,message,media,mediatype);
			break;
		case "prompt":
			sendMessage(number, 'You prompted '+message);
			break;
		default:
			// console.log('no matched\n soon deploying in DB');
			DB.store(number, message, media);
			
	}

}

module.exports=findCommand;