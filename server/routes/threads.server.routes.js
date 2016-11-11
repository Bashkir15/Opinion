import express from 'express';
import threadController from '../controllers/threads.server.controller';
import auth from '../helpers/auth'

var router = express.Router();
var threads = threadController();

router.post('/', auth.ensureAuthorized, threads.create);
router.get('/unauthHome', auth.justGetUser, threads.unauthHome);
router.get('/authedHome', auth.ensureAuthorized, threads.authedHome);
router.get('/:streamId/threads', auth.justGetUser, threads.list);
router.get('/:threadId', auth.justGetUser, threads.single);
router.get('/user/:userId', auth.justGetUser, threads.userThreads);
router.get('/saved/:userId', auth.justGetUser, threads.userSaved);
router.post('/:threadId/like', auth.ensureAuthorized, threads.like);
router.post('/:threadId/dislike', auth.ensureAuthorized, threads.dislike);
router.post('/:threadId/save', auth.ensureAuthorized, threads.save);
router.post('/:threadId/unsave', auth.ensureAuthorized, threads.unsave);
router.post('/:threadId/modify', auth.ensureAuthorized, threads.modify);
router.delete('/:threadId/remove', auth.ensureAuthorized, threads.remove);

module.exports = router;