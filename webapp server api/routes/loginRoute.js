const express = require('express'),
	   router = express.Router(),
	   	   db = require('../models/index'),
   applyLogin = require('../handlers/applyLogin'),
   checkLogin = require('../handlers/checkLogin');

router.post('/',function(req,res){
		// db.Verifications.create({number:'whatsapp:1234',otp:'3241'})
		// 	.then(()=>console.log('done'))
		// 	.catch(()=>console.log('error'));
		// return ;

	let number = req.body.number;
	let otp = req.body.otp;

	db.Verifications.findOne({number})
		.then(v=>{
			if (v.otp===otp)
			{
				db.Verifications.findOneAndDelete({number})
					.then(()=>console.log('Verification removed'))
					.catch(()=>console.log('Verification could not be removed'));
				applyLogin(number)
					.then(resp=>res.status(200).json(resp))
					.catch(e=>res.status(500).json(e));
			}
			else
				res.status(401).json({flash:'Incorrect OTP!'});
		})
		.catch(e=>res.status(404).json({flash:'Please type LOGIN in the whatsapp chat'}))
});

router.post('/checklogin', function(req,res){
	checkLogin(req,res);
})

module.exports=router;