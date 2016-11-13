import express from 'express'
import chatsController from '../controllers/chats.server.controller'
import auth from '../helpers/auth'

var router = express.Router();
var chats = chatsController();

router.post('/', auth.ensureAuthorized, chats.create);
router.get('/', auth.ensureAuthorized, chats.list);
router.get('/:chatId', auth.ensureAuthorized, chats.single);
router.post('/:chatId/message', auth.ensureAuthorized, chats.message);
router.post('/:chatId/save', auth.ensureAuthorized, chats.save);
router.post('/:chatId/unsave', auth.ensureAuthorized, chats.unsave);

module.exports = router;