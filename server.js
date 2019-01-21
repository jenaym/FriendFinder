//Dependencies
var express = require("express");
var path = require("path");

//Express configuration
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// API and HTML Routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});