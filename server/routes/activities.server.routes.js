import express from 'express'
import activityController from '../controllers/activity.server.controller'

var router = express.Router();
var activity = activityController();

router.get('/feed/:userId', activity.feed);

module.exports = router;