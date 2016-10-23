import express from 'express';
import streamController from '../controllers/streams.server.controller';
import auth from '../helpers/auth';

var router = express.Router();
var streams = streamController();

router.post('/', auth.ensureAuthorized, streams.create);
router.get('/', auth.justGetUser, streams.list);
router.get('/:streamId', auth.justGetUser, streams.single);

module.exports = router;