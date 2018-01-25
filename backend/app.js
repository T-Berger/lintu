const cors = require('cors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var io = require('./node_modules/socket.io');
var spawn = require('child_process').spawn;
var util  = require('util');
var sys   = require('sys');
var fs    = require('fs');
var url   = require('url');
var http  = require('http');
// var encoder = require('text-encoding');
//var initDB = require('mongodbtasks/mongodbtasksfile');




var mongo = require("mongodb");
var monk = require("monk");
var db = monk('localhost:27017/lintudb');

var index = require('./routes/index');
var task = require('./routes/task');
var alltasks = require('./routes/alltasks');
const TextDecoder = require("text-encoding").TextDecoder;
const TextEncoder = require("text-encoding").TextEncoder;

var app = express();

// socket.io terminal setup
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var redis = require('redis');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//access
app.use(cors());
// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', index);
app.use('/tasks', task);
app.use('/alltasks',alltasks);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(3001, function() {
    console.log('Socket server booted on *:3001');
});

io.on('connection', function(socket) {
    console.log('new client connected');
    const child = spawn('/bin/bash');
    // process.stdin.pipe(child.stdin);
    var asc = new TextEncoder("ascii");
    var decoder = new TextDecoder("ascii");
    child.stdout.on('data', (data) => {
        console.log(`child stdout:\n${data}`);
        // io.to(socket).emit('stdout', data); //GEHT NICHT EMIT NICHT
        // console.log(data)
        // spaeter nur noch auslagern

        // ascii Buffer array to Sting

        // var enc = new TextEncoder("iso-8859-2");
        // console.log(enc.decode(data));
        asc.encoding;
        console.log('Ascii');
        // var asc = new TextEncoder("ascii");
        var encodedString = decoder.decode(data);
        // console.log("Sende das hier >" + encodedString + " <" )
        // console.log(encoder.decode(data));

        io.emit('stdout', encodedString)
    });

    child.stderr.on('data', (data) => {
        console.log(`child stdout:\n${data}`);
        var encodedString = decoder.decode(data);
        // log("Sende das hier >" + encodedString + " <" );
        io.emit('stdout', encodedString);
    });

    socket.on('stdin', (data) => {
        console.log(data);
        child.stdin.write(data)
    })


    // var redisClient = redis.createClient();
    // redisClient.subscribe('message');
    // redisClient.on('message', function (channel, message) {
    //     logMultipleData('New Message In Queune', channel, message);
    // })
});

module.exports = app;
