var https = require('https');
var allData = "";

module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {

  response.setEncoding('utf8');

 response.on('data', function (data) {
    allData += data;
  })
    response.on('end', function (data) {
      callback(allData);
  });
 });
};

