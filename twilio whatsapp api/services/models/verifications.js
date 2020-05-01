const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
	number: {
		type: String,
		required: 'verifications: number cannot be blank',
		unique: true
	},
	otp: {
		type: String,
		required: 'verifications: OTP cannot be blank'
	},
	createdAt: {
		type: Date,
		expires: 5*60, // in seconds
		default: Date.now
	}
});

const Verification = mongoose.model('Verification', verificationSchema);

module.exports=Verification;