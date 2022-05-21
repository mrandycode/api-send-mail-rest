const express = require('express');
const authMailer = require('../routes/auth-email.router');
const supportMailer = require('../routes/support.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api-send-mail-rest', router);
    router.use('/auth', authMailer);
    router.use('/support', supportMailer);
}

module.exports = routerApi;