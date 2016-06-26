import express from 'express';
import auth from '../helpers/auth';
var router = express.Router();
var streams = require('../controllers/streams.server.controller')();

router.post('/', auth.ensureAuthorized, streams.create);
router.get('/', auth.justGetUser, streams.list);
router.get('/:streamId', auth.justGetUser, streams.single);
router.post('/:streamId/subscribe', auth.ensureAuthorized, streams.subscribe);
router.post('/:streamId/unsubscribe', auth.ensureAuthorized, streams.unsubscribe);

module.exports = router;