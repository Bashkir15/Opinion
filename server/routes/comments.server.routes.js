import express from 'express';
import commentController from '../controllers/comments.server.controller';
import auth from '../helpers/auth';

var router = express.Router();
var comments = commentController();

router.post('/', auth.ensureAuthorized, comments.create);
router.get('/:threadId', auth.justGetUser, comments.list);
router.post('/:commentId/like', auth.ensureAuthorized, comments.like);
router.post('/:commentId/dislike', auth.ensureAuthorized, comments.dislike);


module.exports = router;