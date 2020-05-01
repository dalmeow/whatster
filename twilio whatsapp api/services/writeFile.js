const fs = require('fs');

function writeFile(commands, message, number, existCommand=null){
	
	if (existCommand) {
		//updating the command of the registered user
		let command = commands.find(c=>c===existCommand)
		command.message=message;
	}		
	else{	
		commands.push({
			message:message,
			number:number
		});
	}

	commands=JSON.stringify(commands);

	fs.writeFile('commands.json', commands, 'utf-8', function(error){
		if (error) {
			console.log('an error occured while writing the file')
		}
		else{
			console.log('file written');
		}
	})
}

module.exports=writeFile;