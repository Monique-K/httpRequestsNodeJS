var https = require('https');
var allData = "";



function getHTML (options, callback) {

  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

 response.on('data', function (data) {
    allData += data;
  })
    response.on('end', function (data) {
      callback(allData);
  });
 });
}

function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getHTML(requestOptions, printHTML));