const router = require('express').Router();
const messageController = require('../controllers/messageController')

router.post('/send',messageController.sendSmsToNumber)

module.exports = router;

