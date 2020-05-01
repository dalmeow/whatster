const express = require('express'),
	  router  = express.Router({mergeParams:true});

const messagesHandler = require('../handlers/messagesHandler'),
	  mediaHandler	  = require('../handlers/mediaHandler'),
	  logsHandler	  = require('../handlers/logsHandler');

const auth = require('../middleware/auth');

router.route('/messages')
	.post(messagesHandler.findmessage)
	.delete(messagesHandler.deletemessage)

router.route('/media')
	.post(mediaHandler.findmedia)
	.delete(mediaHandler.deletemedia)

router.route('/logs')
	.post(logsHandler.findlogs)

module.exports = router;