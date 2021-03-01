const {sum} = require("./helpers"); //Known as deconstructor {sum}
const total = sum(10, 229); 
console.log("total is " + total);

/*const caller = require("./helpers"); //Used to call another file that's been exported
const total = caller.sum(10, 200); //'caller' is used to return the file that's been exported
console.log("total is " + total);*/

/*const httpModule = require("http");
const server = httpModule.createServer((request, response) => {
    res.end("HElloe form node.js no fair");
});
server.listen(3202); // listens to the port given and executes the code above
*/
const fs = require("fs");
const fileName = "helpers.txt";
fs.watch(fileName, function callBack() { //listens to changes made then executes function callBack
    console.log("file changed again!")
});

//Sync Programming Below; wont progress until finished this first
//const data = fs.readFileSync(fileName);
//console.log(data.toString());

function errHandler(error) {
    console.log(error);
}
function dataHandler(data){
    console.log(data.toString());
}
//Asyncronous Programming Below
fs.readFile(fileName, function textDisplay(error, data) { //Used to display data or the text of a file
    if (error) {
        errHandler(error);
    }
    dataHandler(data);
});
console.log("Async programming"); //Displayed first 'cause it is shorter time to execcute
