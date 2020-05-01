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

var PORT = process.env.PORT || 7000;

app.listen(PORT, function(){
	console.log(`serving on ${PORT}`);
})