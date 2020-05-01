const Clarifai = require('clarifai');

const app=new Clarifai.App({
	apiKey: process.env.ClarifaiApiKey
});

async function imageRecognize(image_url){
	const promise=new Promise((resolve,reject)=>{
		app.models.initModel({id: Clarifai.GENERAL_MODEL, version: process.env.ClarifaiVersion})
		      .then(generalModel => {
		        return generalModel.predict(image_url)
		      })
		      .then(response => {
		        var concepts = response['outputs'][0]['data']['concepts'];
		        const objects=[];
		        for(concept of concepts)
		        {
		        	objects.push(concept.name);
		        }
		       resolve(objects)
		       reject('here was an error')
		      })
		      .catch((error)=>console.log(error.message))	
	})
	const objects=await promise;
	return objects;
}

module.exports= imageRecognize;