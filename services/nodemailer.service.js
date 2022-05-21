const nodemailer = require("nodemailer");
const { config } = require('../config/config');

class NodeMailerService {

    constructor() { }

    async createTransport(email, variable) {

        try { // create reusable transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
                host: config.hostSmtp,
                port: config.portSmtp,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: config[variable.user], // generated ethereal user
                    pass: config[variable.pass], // generated ethereal password
                },
            });

            await transporter.sendMail(email);
            return { code: 200, message: 'Correo enviado correctamente ' + email.to };
        } catch (err) {
            console.log(err.Error);
            return { code: 500, message: err };
        }

    }

    async sendMail(req, variable) {
        const emailBody = {
            from: req.from,
            to: req.to,
            subject: req.subject,
            text: req.text,
            html: req.html,
        };
        return await this.createTransport(emailBody, variable);
    }
}

module.exports = NodeMailerService
