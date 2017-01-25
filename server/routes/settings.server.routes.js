import express from 'express'
import settingsController from '../controllers/settings.server.controller'
import auth from '../helpers/auth'

var router = express.Router();
var settings = settingsController();

router.get('/', auth.justGetUser, settings.get);
router.get('/update', auth.ensureAuthorized, settings.update);

module.exports = router;