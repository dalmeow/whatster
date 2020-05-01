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

app.get('/read',function(req,res){
	readFile()
		.then(commands=>res.json(commands))
		.catch(error=>res.send(error))
})

app.post('/switchnow', function(req,res){

	if(checkCommand(req.body.From, req.body.Body))
		{return res.send('checked command');}

	if ('MediaUrl0' in req.body) 
		findCommand(req.body.From, req.body.Body, req.body.MediaUrl0, req.body.MediaContentType0);
	else
		findCommand(req.body.From, req.body.Body);
	res.send('done');
})


PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
	console.log('listening on '+PORT);
})