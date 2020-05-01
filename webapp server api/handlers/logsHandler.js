const db = require('../models');

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

exports.findlogs = async function (req,res){
	const user = await getUser(req.params.number,res);
	const logs = user.logs;
	res.status(200).json({logs});
}

exports.deletelogs = async function (req,res){
	const user = await getUser(req.params.number,res);
	db.Users.findByIdAndDelete(req.body.messageId)
		.then(()=>res.status(200).json({flash:'Deleted successfully!'}))
		.catch(()=>res.status(500).json({flash: "Couldn't delete\nTry again later!"}))
}