var request = require('request');
	xml2js = require('xml2js');
	parser = new xml2js.Parser();
function getData() {
	request('http://www.bey2ollak.com/Bey2ollak/Traffic?action=getTraffic&ver=1.0&w=320&h=240&deviceType=0&lang=1&protocol=1&city=0&lang=1', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    parser.parseString(body, function (err, result) {
       		 	var express = require('express');
				var app = express();

				app.get('/', function(req, res){
				  res.jsonp(result)
				});

				app.listen(8080);

    	});
	  }
	});
}
getData();
