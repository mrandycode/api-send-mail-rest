const express = require('express');
const authMailer = require('../routes/auth-email.router');
const genericMailer = require('../routes/auth-email.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api-send-mail-rest', router);
    router.use('/auth', authMailer);
    router.use('/generic-mailer', genericMailer);
}

module.exports = routerApi;