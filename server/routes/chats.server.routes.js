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
router.get('/:userId/saved', auth.ensureAuthorized, chats.getSaved);
router.post('/:chatId/remove', auth.ensureAuthorized, chats.remove);
router.post('/:chatId/unremove', auth.ensureAuthorized, chats.unremove);
router.get('/:userId/removed', auth.ensureAuthorized, chats.getRemoved);

module.exports = router;