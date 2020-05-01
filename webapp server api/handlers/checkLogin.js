const jwt = require('jsonwebtoken');

function checkLogin(req,res) {
	if (!('token' in req.body)) {
		console.log('no token')
		return res.status(400).send(null);
	}
	jwt.verify(req.body.token, process.env.JWT_SECRET, (error,decoded)=>{
		if (error)
			res.status(404).send(null);

		else{
			res.status(200).send({number:decoded.number});
		}
	})
}

module.exports=checkLogin;