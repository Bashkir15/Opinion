import express from 'express';
import streamController from '../controllers/streams.server.controller';
import auth from '../helpers/auth';

var router = express.Router();
var streams = streamController();

router.post('/', auth.ensureAuthorized, streams.create);
router.get('/', auth.justGetUser, streams.list);
router.get('/count', auth.justGetUser, streams.getCount);
router.post('/uploadImage/:streamId', auth.ensureAuthorized, streams.uploadImage);
router.get('/:streamId', auth.justGetUser, streams.single);
router.post('/:streamId/subscribe', auth.ensureAuthorized, streams.subscribe);
router.post('/:streamId/unsubscribe', auth.ensureAuthorized, streams.unsubscribe);
router.get('/search/:keyword', auth.justGetUser, streams.search);

module.exports = router;