import express from 'express';
import auth from '../helpers/auth';
import userController from '../controllers/users.server.controller';

let router = express.Router();
let users = userController();

router.post('/', users.create);
router.post('/authenticate', users.authenticate);
router.post('/forgot', users.forgot);
router.post('/reset', users.reset);
router.get('/:username', auth.justGetUser, users.single);

module.exports = router;