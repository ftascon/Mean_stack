var express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        usersCT = require('./server/controllers/usersCT');

/* - Database - */
mongoose.connect('mongodb://localhost:27017/test');

/* - Body Parser (Make Express JSON) - */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* - Express ( Redirects ) - */ 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));

/* - REST API - */
app.get('/api/users', usersCT.list);
app.post('/api/users', usersCT.create);


/* - NodeJS Server - */
app.listen(8080, function () {
    console.log('I\'m Listening...');
});