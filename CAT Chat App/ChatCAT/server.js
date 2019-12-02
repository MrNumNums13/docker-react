'use strit';
//These first two constants start up the application as an express app.
const express = require('express');
const app = express();
//This line sets the app to make sure it's always on port 3000 so we don't have to set it manually
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

//This first get function defines what will happen on the main page when you go to localhost:3000
app.get('/', (req, res, next) => {
	//res.send('<h1>Hello Express!</h1>');
	res.render('login', {
		pageTitle: 'My Login Page'
	});
});

//This is the function that starts the webserver on the specified port
app.listen(app.get('port'), () => {
	console.log('ChatCAT Running on Port: ', app.get('port'));
})
