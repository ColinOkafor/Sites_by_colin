const app = require('../backend/index.js');
const serverless = require('serverless-http');

module.exports = (req, res) => {
    const handler = serverless(app);
    return handler(req, res);
};