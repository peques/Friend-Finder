// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const htmlOutput = require('./routing/htmlRoutes.js');
const apiOutput = require('./routing/apiRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname, '../public/home.html')));
console.log(__dirname);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


htmlOutput(app);
apiOutput(app);





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Connection Successful");
  console.log("Listening On PORT: " + PORT);
});



