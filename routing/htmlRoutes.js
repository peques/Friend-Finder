const path = require('path');

module.exports = function(app) {


//Sends home.html file to client
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});


//Sends survey.html file to client
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}