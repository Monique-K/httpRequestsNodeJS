var https = require('https');
var allData = "";

function getAndPrintHTML (options) {


  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

 response.on('data', function (data) {
    allData += data;
  })
    response.on('end', function() {
    console.log(allData);
  });
 });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions));