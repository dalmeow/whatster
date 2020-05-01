const jwt = require('jsonwebtoken');

function auth(req,res,next) {
	console.log('body and params are ',req.body, req.params.number);
	const number=req.params.number;
	if (!('token' in req.body)) {
		return res.status(400).json({power:'power'});
	}
	jwt.verify(req.body.token, process.env.JWT_SECRET, (error,decoded)=>{
		if (error){
			// console.log(error)
			return res.status(404).json({null:null});
		}

		else{
			if (decoded.number!==number)
			{
				console.log(decoded.number, number);
				return res.status(403).json({flash:'Oops! Try logging in again'})
			}
			return next();
		}
	})
}

module.exports=auth;