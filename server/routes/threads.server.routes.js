import express from 'express';
import threadController from '../controllers/threads.server.controller';
import auth from '../helpers/auth'

var router = express.Router();
var threads = threadController();

router.post('/', auth.ensureAuthorized, threads.create);
router.get('/', auth.justGetUser, threads.create);

module.exports = router;