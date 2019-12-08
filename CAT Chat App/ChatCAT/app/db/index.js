'use strict';
const config = require('../config');
const connectionString =
  "mongodb+srv://harry:Harry-O09@mychatcatdb-sj0ku.mongodb.net/test?retryWrites=true&w=majority";
 
const Mongoose = require("mongoose");
 
Mongoose.connect(connectionString, {
  useNewUrlParser: true
});
 
Mongoose.connection.on("error", error => console.log(`MongoDB Error: ${error}`));


// Create a Schema that defines the structure for storing user data
const chatUser = new Mongoose.Schema({
	profileId: String,
	fullName: String,
	profilePic: String
});


// Turn the schema into a usable model
let userModel = Mongoose.model('chatUser', chatUser);

module.exports = {
	Mongoose,
	userModel
}


