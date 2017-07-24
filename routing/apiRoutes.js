const friends = require('../app/data/friends.js');

module.exports = function(app) {

//Logic to grap json data from friends.js, send as response to client
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

//THIS WILL SEND FRIEND DATA TO FRIENDS.JS FILE AND PUSH OBJECT TO ARRAY
  app.post("/api/friends", function(req, res) {
    // res.sendFile(path.join(__dirname, "../app/data/friends.js"));
    console.log(req.body);

//LOGIC TO COMPARE USER TO FRIENDS LIST HERE




    friends.push(req.body);
    console.log("Friend Added!");
  });

}