'use strict';
const config = require('../config');
const connectionString =
  "mongodb+srv://harry:Harry-O09@mychatcatdb-sj0ku.mongodb.net/test?retryWrites=true&w=majority";
 
const mongoose = require("mongoose");
 
mongoose.connect(connectionString, {
  useNewUrlParser: true
});
 
mongoose.connection.on("error", error => console.log(`MongoDB Error: ${error}`));


module.exports = {
	mongoose
}


