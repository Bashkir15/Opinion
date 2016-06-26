import express from 'express';
import auth from '../helpers/auth';
var comments = require('../controllers/comments.server.controller')();
var router = express.Router();

router.post('/', auth.ensureAuthorized, comments.create);
router.get('/thread/:threadId', auth.justGetUser, comments.list);
router.get('/:commentId', auth.justGetUser, comments.single);
router.post('/:commentId/upvote', auth.ensureAuthorized, comments.upvote);
router.post('/:commentId/downvote', auth.ensureAuthorized, comments.downvote);
router.post('/:commentId/save', auth.ensureAuthorized, comments.save);
router.post('/:commentId/unsave', auth.ensureAuthorized, comments.unsave);
router.post('/:commentId/modify', auth.ensureAuthorized, comments.modify);
router.delete('/:commentId/remove', auth.ensureAuthorized, comments.remove);

module.exports = router;