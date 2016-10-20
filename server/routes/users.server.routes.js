import express from 'express';
import auth from '../helpers/auth';
import userController from '../controllers/users.server.controller';

let router = express.Router();
let users = userController();

router.post('/', users.create);

module.exports = router;