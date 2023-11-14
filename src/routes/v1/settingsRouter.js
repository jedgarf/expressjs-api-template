const express = require('express');
const settingRouter = express.Router();

// Controlllers
const settingsController = require('../../controllers/settings');

// Middlewares
import { checkAuthorization } from '../../middleware';

settingRouter.get('/api_keys/:id?', checkAuthorization, settingsController.getApiKeys);
settingRouter.get('/menus/:id?', checkAuthorization, settingsController.getMenus);
settingRouter.get('/sub_menus/:id?', checkAuthorization, settingsController.getSubMenus);

module.exports = settingRouter;