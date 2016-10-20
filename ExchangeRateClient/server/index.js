var express = require('express');
var ratesGenerator = require('./ratesGenerator');

ratesGenerator.init();
var server = express();

server.get('/rates', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.jsonp({
        rates: ratesGenerator.getCurrentRates(),
    });
})

server.listen(3000, function() {
    console.log('Server is running on port 3000.');
})
