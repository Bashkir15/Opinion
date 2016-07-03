import express from 'express';
import auth from '../helpers/auth';
var chats = require('../controllers/chats.server.controller')();
var router = express.Router();

router.post('/', auth.ensureAuthorized, chats.create);
router.get('/', auth.ensureAuthorized, chats.list);
router.get('/:chatId', auth.ensureAuthorized, chats.single);
router.post('/:chatId/message', auth.ensureAuthorized, chats.message);

module.exports = router;