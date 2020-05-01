import axios from 'axios';

// var apiUrl='http://localhost:7000';

var apiUrl='https://apiwhatster.herokuapp.com'

//LOGIN API CALLS
export async function login(number, otp){
	return axios({
		method: 'post',
		url: apiUrl+"/user/login",
		data: {number, otp}
	})
	.then(response=>{
		// console.log(response)
		return ({status:response.status,token:response.data.token,flash:response.data.flash});
	})
	.catch(e=>{
		// console.log('at apicalls', e.response, e.response.data)
		if ('response' in e && e.response) {
			return ({flash:e.response.data.flash})
		}
		else{
			return ({flash:'Oops!'});
		}
		
	})
}

export async function checkLogin(token){
	return axios({
		method: 'post',
		url: apiUrl+"/user/login/checkLogin",
		data: {token}
	})
	.then(response=>response.data.number)
	.catch(e=>null);
}


// CONTENT API CALLS
export async function getMessages(number,token) {
	console.log('getting messages', number , token)
	return 	axios({
		method:'post',
		url: `${apiUrl}/content/${number}/messages`,
		data: {token}
	})
	.then(response=>({messages:response.data}))
	.catch(e=>({flash:e.response}))
}

export async function getMedia(number,token) {
	return axios({
		method: 'post',
		url : `${apiUrl}/content/${number}/media`,
		data: {token}
	})
	.then(response=>({media:response.data}))
	.catch(e=>({flash:'Could not get media'}))
}

export async function getLogs(number,token){
	return axios({
		method: 'post',
		url : `${apiUrl}/content/${number}/logs`,
		data: {token}
	})
	.then(response=>({logs:response.data}))
	.catch(e=>({flash:'Could not get logs\nTry refreshing the page'}))
}

export async function deleteMessage(number, token, message){
	return axios({
		method: 'delete',
		url : `${apiUrl}/content/${number}/messages`,
		data: {token, message}
	})
	.then(response=>({flash:response.data.flash}))
	.catch(e=>({flash:"Couldn't Delete!"}))
}

export async function deleteMedia(number, token, media){
	return axios({
		method: 'delete',
		url: `${apiUrl}/content/${number}/media`,
		data: {token, media}
	})
	.then(response=>({flash:response.data.flash}))
	.catch(e=>({flash:"Couldn't Delete!"}));
}