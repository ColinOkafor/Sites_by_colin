const app = require('../backend/index.js');
const serverless = require('serverless-http');

module.exports = serverless(app);
