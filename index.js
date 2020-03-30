global.central_config = require('./server/shared/server.utilities.config')
global.app_constants = require('./server/shared/server.utilities.constant');
//global.http_response = require('./../shared/http_response.js');
global.logger = require('./server/utilities/server.utilities.winston');

const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  uuid = require('shortid'),
  util = require('util'),
  responseTime = require('response-time');

app.use(responseTime());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   // res.setHeader('Access-Control-Allow-Origin', '*');
//   // res.setHeader('Access-Control-Allow-Credentials', 'true');
//   // res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//   // res.setHeader('Cache-Control', 'no-cache');

//   // res.setHeader(app_constants.init_time, Date.now());
//   // res.setHeader(app_constants.corr_id, req.get(app_constants.corr_id) ? req.get(app_constants.corr_id) : uuid.generate());

//   // process.current_res = res;

//   next();
// });
require("./server/core/routes/server.core.routes.v3")(app);


  // process.on('uncaughtException', (error) => {
  //   let response = process.current_res;
  //   if (response) {
  //     error.message = util.format("%s CRID : %s", error.message, response.get(app_constants.corr_id));
  //     // response.status(error.status || 500).jsonp({message: error.message});
  //   }
  //   logger.put("[_____][app][uncaughtException] message : " + error.message);
  //   logger.put("[_____][app][uncaughtException] stack : " + error.stack);
  // });

// process.on('unhandledRejection', (reason, promise) => {
//   // let response = process.current_res;
//   // let error = new Error(reason);
//   // if (reason instanceof Error) {
//   //   error = reason;
//   // }
//   // if (response) {
//   //   error.message = util.format("%s CRID : %s", error.message, response.get(app_constants.corr_id));
//   //   logger.put("[_____][app][unhandledRejection] reason: " + error.message);
//   //   http_response.bad_request(response, reason, app_constants.res_code_bad_request);
//   // }
//   // logger.put("[_____][app][unhandledRejection] reason: " + error.message);
// });

// app.use((error, req, res, next) => {
//   // error.message = util.format("%s CRID : %s", error.message, res.get(app_constants.corr_id));
//   // logger.put("[_____][app][error] : " + error.message);
//   // res.status(error.status || 500).jsonp({ message: error.message });
// });

app.listen(1000, () => {
  logger.put('[_____][app] server running on port: ' + 1000);
});

module.exports = app;