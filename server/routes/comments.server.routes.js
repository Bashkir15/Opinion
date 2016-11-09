import express from 'express';
import commentController from '../controllers/comments.server.controller';
import auth from '../helpers/auth';

var router = express.Router();
var comments = commentController();

router.post('/', auth.ensureAuthorized, comments.create);
router.get('/:threadId', auth.justGetUser, comments.list);
router.get('/user/:userId', auth.justGetUser, comments.userComments);
router.get('/saved/:userId', auth.justGetUser, comments.userSaved);
router.post('/:commentId/like', auth.ensureAuthorized, comments.like);
router.post('/:commentId/dislike', auth.ensureAuthorized, comments.dislike);
router.post('/:commentId/save', auth.ensureAuthorized, comments.save);
router.post('/:commentId/unsave', auth.ensureAuthorized, comments.unsave);
router.delete('/:commentId/remove', auth.ensureAuthorized, comments.remove);


module.exports = router;