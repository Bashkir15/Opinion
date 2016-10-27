import express from 'express';
import commentController from '../controllers/comments.server.controller';
import auth from '../helpers/auth';

var router = express.Router();
var comments = commentController();

router.post('/', auth.ensureAuthorized, comments.create);
router.get('/:threadId', auth.justGetUser, comments.list);


module.exports = router;