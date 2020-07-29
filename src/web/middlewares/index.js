const bodyParser = require('body-parser');

module.exports = {
  beforeHandler: [
    (app) => app.use(bodyParser.json({ limit: '10mb' })),
  ],
};
