var restify = require('restify');
var builder = require('botbuilder');
var http = require('http');

//server and port
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('listening to %s', server.url);
});

//connection to API
var connector = new builder.ChatConnector({
    appId: '2e4a4e15-570e-43bf-a5bc-a5e7d77442e2',
    appPassword: 'C1Vt2EKCoxUDFsMxx0jODBi'
});

var bot = new builder.UniversalBot(connector);

server.post('https://zorn.herokuapp.com/api/messages', connector.listen());

//incoming msg route
bot.dialog('/', function (session, args) {
    session.send("Hi");
    console.log(session.message.text);
});