const express = require('express');
const authRouter = express.Router();

// Controlllers
const authController = require('../../controllers/authentication');

// Middlewares
import { checkAuthorization } from '../../middleware';

authRouter.post('/auth/login', checkAuthorization, authController.login);
authRouter.post('/auth/register', checkAuthorization, authController.register);

module.exports = authRouter;