var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var upperString = html.toUpperCase();
  console.log(upperString);
}

getHTML(requestOptions, printUpperCase);
