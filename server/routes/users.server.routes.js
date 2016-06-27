import express from 'express';
import auth from '../helpers/auth';
var users = require('../controllers/users.server.controller')();
var router = express.Router();

router.post('/', users.create);
router.post('/authenticate', users.authenticate);
router.get('/:userId', users.single);
router.post('/:userId/follow', auth.ensureAuthorized, users.follow);
router.post('/:userId/updateProfile', auth.ensureAuthorized, users.updateProfile);
router.post('/uploadPicture/:userId', auth.ensureAuthorized, users.image);
router.get('/search/:keyword', auth.justGetUser, users.search);

module.exports = router;