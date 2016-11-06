import express from 'express';
import threadController from '../controllers/threads.server.controller';
import auth from '../helpers/auth'

var router = express.Router();
var threads = threadController();

router.post('/', auth.ensureAuthorized, threads.create);
router.get('/unauthHome', auth.justGetUser, threads.unauthHome);
router.get('/:streamId/threads', auth.justGetUser, threads.list);
router.get('/:threadId', auth.justGetUser, threads.single);
router.post('/:threadId/like', auth.ensureAuthorized, threads.like);
router.post('/:threadId/dislike', auth.ensureAuthorized, threads.dislike);
router.post('/:threadId/save', auth.ensureAuthorized, threads.save);
router.post('/:threadId/unsave', auth.ensureAuthorized, threads.unsave);

module.exports = router;