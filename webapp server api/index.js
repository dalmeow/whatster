require('dotenv').config();
const express 	 = require('express'),
	  app  	  	 = express(),
	  bodyParser = require('body-parser'),
      cors       = require('cors');

const loginRoute = require('./routes/loginRoute'),
   contentRoutes = require('./routes/contentRoutes');

const db = require('./models');

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const auth = require('./middleware/auth')

app.use('/user/login', loginRoute);

app.use('/content/:number', auth, contentRoutes);

app.get('/het',async function (req,res) {
	// const user = await db.Users.findOne({number:'whatsapp:1234'})
	// user.messages.push('master');
	// user.media.push('http://duckduckgo.com');
	// user.logs.push('logging in');
	// user.save();

	db.Verifications.find()
		.then(v=>console.log(v))
		.catch(e=>console.log('error was', e))

	res.send(req.body.het);
})

var PORT = process.env.PORT || 7000;

app.listen(PORT, function(){
	console.log(`serving on ${PORT}`);
})