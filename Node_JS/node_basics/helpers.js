function sum(a, b){
    return a+b;
}

//Is known as an Arrow function; not as good as traditional function above
//const sum = (a, b) => a+b; is an alternative
/*const sum = (a, b) =>{  
    return a+b;
};*/


//exports the function below to be used by other files
//exports.sum = (a, b) => a+b; //is an alternative
module.exports = { 
    sum
};