import express from 'express';
const corsProxyRouter = express.Router();

// Controllers
import { corsProxy } from '../controllers';

// Middlewares
import { checkAuthorization } from '../middleware';

// --------------------------------------------------------------------------------------------
// CORS Proxy
corsProxyRouter.get('/cors_proxy', checkAuthorization, corsProxy);

// ----------------------------------------------------------------------------------------------

export default corsProxyRouter;