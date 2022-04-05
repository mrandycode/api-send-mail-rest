const nodemailer = require("nodemailer");
const { config } = require('../config/config');

class NodeMailerService {

    constructor() { }

    async createTransport(email) {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: config.hostSmtp,
            port: config.portSmtp,
            secure: true, // true for 465, false for other ports
            auth: {
                user: config.emailUser, // generated ethereal user
                pass: config.emailPassword, // generated ethereal password
            },
        });

        await transporter.sendMail(email);
        return { message: 'Correo enviado correctamente ' + email.to };

    }

    async sendMail(req) {
        const emailBody = {
            from: req.from,
            to: req.to,
            subject: req.subject,
            text: req.text,
            html: req.html,
        };
        return await this.createTransport(emailBody);
    }
}

module.exports = NodeMailerService
