import express from 'express';
const mailerRouter = express.Router();

// Controllers
import { sendMail, receiveMail } from '../../controllers';

// Middlewares
import { checkAuthorization } from '../../middleware';

// ---------------------------------------------------------------------------------------------
mailerRouter.post('/mail/send', checkAuthorization, sendMail);
mailerRouter.post('/mail/receive', checkAuthorization, receiveMail);
// ---------------------------------------------------------------------------------------------

export default mailerRouter;