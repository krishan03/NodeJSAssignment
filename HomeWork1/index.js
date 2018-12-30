/*
 * Primary file for API
 *
 */


//dependencies 

var http = require('http');
var url = require('url');
var config = require('./config');

//creating server
var httpServer = http.createServer(function (req, res) {
    unifiedResponse(req, res);
});

//start server
httpServer.listen(config.httpPort, function () {
    console.log("Server is listening on port", config.httpPort);
});

//Configure the server to respond to all requests with a string
var unifiedResponse = function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;


    //selecting handler
    var choosenHandler = typeof (router[path]) !== 'undefined' ? router[path] : handlers.notFound;
    var data = {
        'payload': "Hello friend, welcome to the Pirple NodeJs Master class"
    };
    choosenHandler(data, function (statusCode, payload) {
        statusCode = typeof (statusCode) == 'number' ? statusCode : 200;
        payload = typeof (payload) == 'string' ? payload : {};
        var payloadString = JSON.stringify(payload);
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(payloadString);
    });



};

var handlers = {};

handlers.hello = function (data, callback) {
    callback(200, "Hello friend, welcome to the Pirple NodeJs Master class");
};

handlers.notFound = function (data, callback) {
    callback(404);
};

var router = {
    '/hello': handlers.hello
};