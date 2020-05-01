const fs = require('fs');

function initialize(){
	var commands = [
		{
			message:"",
			number:"",
		}
	]

	commands=JSON.stringify(commands);

	fs.writeFile('commands.json',commands,'utf-8',function(error){ // this file is created and destroyed in the server itself
		if (error) {
			console.log(error)
		}
		else{
			console.log('initialized file');
		}
	});
	return commands;
}

async function readFile(){
	const promise = new Promise((resolve,reject)=>{
		fs.readFile('commands.json',{encoding:'utf-8'},function(error,data){
			if (error) {
				data=initialize();
			}
			data=JSON.parse(data);
			resolve(data);
		})
	});
	const commands=await promise;
	return commands;
}

module.exports = readFile;