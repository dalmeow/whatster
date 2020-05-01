require('dotenv').config();
const express = require('express'),
	  app	  = express(),
	  bodyParser = require('body-parser');

const sendMessage = require('./services/sendMessage'),
	  readFile	  = require('./services/readFile'),
	  writeFile   = require('./services/writeFile'),
	  db		  = require('./services/models/index');

const checkCommand = require('./applications/checkCommand'),
	  findCommand  = require('./applications/findCommand');

app.use(bodyParser.urlencoded({extended:false}));

var usernumber = "whatsapp:+917205117235";

// sendMessage(usernumber,'it is working');

app.get('/read',function(req,res){
	readFile()
		.then(commands=>res.json(commands))
		.catch(error=>res.send(error))
})

app.post('/switchnow', function(req,res){

	if(checkCommand(req.body.From, req.body.Body))
		{return res.send('checked command');} /*error here do not redirect*/

	if ('MediaUrl0' in req.body) 
		findCommand(req.body.From, req.body.Body, req.body.MediaUrl0, req.body.MediaContentType0);
	else
		findCommand(req.body.From, req.body.Body);
	res.send('done');
})








app.get('/', function(req,res){
	db.Users.find().sort('-logs')
		.then(users=>res.json(users))
		.catch(error=>res.send(error));
})

app.post('/', function(req,res){
	db.Users.create(req.body)
		.then(user=>res.json(user))
		.catch(error=>res.send(error));
})


app.get('/verifs',function(req,res){
	db.Verifications.find()
		.then(v=>res.json(v))
		.catch(e=>res.send(e));
})



// app.listen(5000,function(){
// 	console.log('listening on 5000');
// })

PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
	console.log('listening on '+PORT);
})