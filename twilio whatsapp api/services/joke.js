const axios = require('axios');
async function joke(){
	console.log('joking')
	const promise=new Promise((resolve,reject)=>{
		axios({
			url: 'https://icanhazdadjoke.com/',
			method: 'GET',
			"headers":{"Accept": "application/json"}
		})
		.then(response=>response.data)
		.then(data=>resolve(data.joke))
		.catch(e=>reject("Sorry, Couldn't get the joke"));
	})
	const message=await promise;
	return message;
}

module.exports= joke;