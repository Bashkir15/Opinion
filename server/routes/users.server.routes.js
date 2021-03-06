import express from 'express';
import auth from '../helpers/auth';
import userController from '../controllers/users.server.controller';

let router = express.Router();
let users = userController();

router.post('/', users.create);
router.post('/authenticate', users.authenticate);
router.post('/forgot', users.forgot);
router.post('/reset', users.reset);
router.get('/notifications', auth.ensureAuthorized, users.notifications);
router.post('/notifications/:userId', auth.ensureAuthorized, users.markRead);
router.get('/:userId', auth.justGetUser, users.single);
router.post('/:userId/follow', auth.ensureAuthorized, users.follow);
router.post('/:userId/unfollow', auth.ensureAuthorized, users.unfollow);
router.post('/:userId/updateProfile', auth.ensureAuthorized, users.updateProfile);
router.post('/:userId/profileReset', auth.ensureAuthorized, users.profileReset);
router.get('/search/:keyword', auth.justGetUser, users.search);
router.post('/uploadPicture/:userId', auth.ensureAuthorized, users.uploadImage);

module.exports = router;