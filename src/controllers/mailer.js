var { verifyConnection, mailSend, mailReceive } = require('../utils/mail.js');
const settings = require("../config/settings.config.js");

export const sendMail = (req, res) => {
    const to = req.body.to;
    const subject = req.body.subject;
    const message = req.body.message;

    if (to === undefined || subject === undefined || message === undefined) {
        res.status(400).json({ message: 'Please complete all required fields.' });
    }

    try {
        
        mailSend({
            from: settings.mailer_username,
            to: to,
            subject: subject,
            text: message
        });

         res.status(200).json({ message: 'Successfully submitted.' });
     } catch (error) {
         res.status(500).json({ message: 'Error in sending mail.' });

     }
 
 };

 export const receiveMail = (req, res) => {
    const from = req.body.from;
    const subject = req.body.subject;
    const message = req.body.message;

    if (from === undefined || subject === undefined || message === undefined) {
        res.status(400).json({ message: 'Please complete all required fields.' });
    }

    try {
        
        mailReceive({
            from: from,
            to: settings.mailer_username,
            subject: subject,
            text: message
        });

         res.status(200).json({ message: 'Successfully submitted.' });
     } catch (error) {
         res.status(500).json({ message: 'Error in sending mail.' });

     }
 
 };