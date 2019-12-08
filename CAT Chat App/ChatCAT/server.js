'use strict';
//These first two constants start up the application as an express app.
const express = require('express');
const app = express();
const chatCat = require('./app');
const passport = require('passport');

//This line sets the app to make sure it's always on port 3000 so we don't have to set it manually
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatCat.session);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', chatCat.router);

//This is the function that starts the webserver on the specified port
app.listen(app.get('port'), () => {
	console.log('ChatCAT Running on Port: ', app.get('port'));
})
