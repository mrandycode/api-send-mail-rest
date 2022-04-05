const express = require('express');
const cors = require('cors');
const { config } = require('./config/config');
const routerApi = require('./routes');
const port = config.port || 3000;
const whitelist = [config.corsWhiteList];

const app = express();
app.use(express.json());

const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Host no permitido'));
        }
    }
}

app.use(cors(options));

app.get('/', (req, res) => {
    res.send('Welcome to api-send-mail-1.0');
});

routerApi(app);

app.listen(port);