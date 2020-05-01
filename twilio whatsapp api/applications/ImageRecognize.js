const imageRecognize = require('../services/imageRecognize'),
	  sendMessage	 = require('../services/sendMessage');

const DB = require('./DB');

function doImageRecognize(image_url, number){
	imageRecognize(image_url)
		.then(objects=>{
			let message = "";
			let i =0;
			for(object of objects){
				message+= `*${++i}* _${object}_`+'\n';
			}
			sendMessage(number, "I ```analyzed``` these: \n\n"+message);

		})
		.catch(error=>console.log(error.message));
		DB.logmessage(number, `You analyzed ${image_url} using Clarifai`);
}

module.exports=doImageRecognize;