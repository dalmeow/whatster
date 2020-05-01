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

exports.findmedia = async function (req,res){
	const user = await getUser(req.params.number,res);
	const media = user.media;
	res.status(200).json({media});
}

exports.deletemedia = async function (req,res){
	const user = await getUser(req.params.number,res);
	const index=user.media.indexOf(req.body.media);
	user.media.splice(index,1);
	user.save();
	console.log('removed MEDIA')
	res.send({flash:'Removed!'})
}