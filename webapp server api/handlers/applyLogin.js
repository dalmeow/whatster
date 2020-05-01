const 	db = require('../models'),
	   jwt = require('jsonwebtoken');

function performLogin(number) {
	const token=jwt.sign({number}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
	const resp={token ,flash:'Sucessfully Logged In'};
	return resp;
}

async function applyLogin(number)
{
	console.log('Applying login to ', number)

	const user = await db.Users.findOne({number});
	let resp=null;
	if (user) {
		resp =performLogin(number);
	}
	else{
		const createdUser= await db.Users.create({number});
		console.log('created');
		if (createdUser) {
			resp = performLogin(number);
			resp.flash=`Welcome to WhatsTer, ${number}`;
		}
		else{
			resp={flash:'Try again later!'}
		}
	}

	return resp;
}

module.exports = applyLogin;