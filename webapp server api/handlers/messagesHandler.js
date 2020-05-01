const db = require('../models');

const auth=require('../middleware/auth');

async function getUser(number,res)
{
	const user = await db.Users.findOne({number});
	if (!user) {
		console.log('not found user');
		res.status(404).json({flash:'No such user found!\nTry logging in again!'})
	}
	else{
		return user;
	}
}

exports.findmessage = async function (req,res){
	// if(!auth(req,res))
	// 	return ;
	const user = await getUser(req.params.number,res);
	const messages = user.messages;
	res.status(200).json({messages});
}

exports.deletemessage = async function (req,res){
	const user = await getUser(req.params.number,res);
	const index=user.messages.indexOf(req.body.message);
	user.messages.splice(index,1);
	user.save();
	res.send({flash:'Removed!'})
}