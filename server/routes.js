const controller = require('./controllers.js');

function routes(app) {
  app.get('/userData', controller.findIpAddress, controller.findUserData);
}

module.exports = routes;
