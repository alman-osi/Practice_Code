const Express = require("express");
const App = Express();
const morgan = require("morgan");
/*App.get("/", function callBack(request, response){ //webpage display only
    response.send("Make Node.js easier for beginners, or esle...");
});*/

const {getPosts} = require("./Routes/Post"); //Brings in routes

const token = function middleTest(request, response, next) {
    console.log("Made here");
    next();
}
//middleware used for authentication and such, in the middle of a process
App.use(morgan("dev"));
App.use(token);

App.get("/", getPosts);

const port = 4200;
App.listen(port, function portMessage() { //terminal display only
    console.log(`port: ${port} will continue listening to your life!!`); 
});
