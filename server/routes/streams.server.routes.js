import express from 'express';
import streamController from '../controllers/streams.server.controller';
import auth from '../helpers/auth';

var router = express.Router();
var streams = streamController();

router.post('/', auth.ensureAuthorized, streams.create);

module.exports = router;