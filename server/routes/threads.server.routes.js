import express from 'express';
import auth from '../helpers/auth';
var router = express.Router();
var threads = require('../controllers/threads.server.controller')();

router.post('/', auth.ensureAuthorized, threads.create);
router.get('/:threadId', auth.justGetUser, threads.single);
router.post('/:threadId/upvote', auth.ensureAuthorized, threads.upvote);
router.post('/:threadId/downvote', auth.ensureAuthorized, threads.downvote);
router.post('/:threadId/save', auth.ensureAuthorized, threads.save);
router.post('/:threadId/unsave', auth.ensureAuthorized, threads.unsave);
router.post('/:threadId/modify', auth.ensureAuthorized, threads.modify);
router.delete('/:threadId/remove', auth.ensureAuthorized, threads.remove);
router.get('/stream/:streamId', auth.justGetUser, threads.list);

module.exports = router;