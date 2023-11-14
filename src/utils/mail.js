const nodemailer = require("nodemailer");
const settings = require("../config/settings.config");

let transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: settings.mailer_host,
    port: settings.mailer_port,
    secure: true, // use TLS

    auth: {
        user: settings.mailer_username,
        pass: settings.mailer_password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
});

const verifyConnection = () => {

    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
        return "error";
        } else {
        return "Server is ready to take our messages";
        }
    });

}

const mailSend = (mailOptions) => {

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return "error";
        } else {
            return "Successfully Send.";
        }
    });

};

const mailReceive = (mailOptions) => {

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return "error";
        } else {
            return "Successfully Send.";
        }
    });

};

module.exports = { verifyConnection, mailSend, mailReceive };