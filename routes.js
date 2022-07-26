const controller = require('./controller/general.js')

var routes = function(app) {

  app.get("/me", function(req, res) {
    res.send("Testing 123");
    console.log("Received GET");
  });
  
//   create comment
  app.post("/create", controller.createTitle);
  
  app.post('/register', controller.register);
  
};
 
module.exports = routes;