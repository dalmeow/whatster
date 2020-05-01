const sendMessage = require('../services/sendMessage'),
	  joke		  = require('../services/joke');

const DB = require('./DB')

function Joke(number)
{
	joke()
		.then(m=>{
			sendMessage(number, m);
			DB.logmessage(number, "Surely Joking: "+m );
		})
		.catch(e=>sendMessage(number, e));
}

module.exports=Joke;