import express from 'express';
import auth from '../helpers/auth';
var router = express.Router();
var threads = require('../controllers/threads.server.controller')();

router.post('/', auth.ensureAuthorized, threads.create);
router.get('/:threadId', auth.justGetUser, threads.single);
router.get('/stream/:streamId', auth.justGetUser, threads.list);

module.exports = router;