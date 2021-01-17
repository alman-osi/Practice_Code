var movement
//Array
var movement = ['one', 'two', 'three']
//Boolean
var movement = true
//String
var movement = 'Sonata in D Minor'


//Global Scope
var where = 'here'
//Function Scope
function printName(params) {
    console.log("No Name is " + where)
}
printName() //called outside of function

//'let' vs 'var'
function Find() {
    let x = 1
    console.log("show me rock " + x) //x = 1 
    {
        let x = 2
        console.log("how me rock, again " + x) //x = 2
    }
}
Find()

//'const' vs 'var
const cue = [1,2,3,5] // Cannot be changed once declared

//cue = [1,2,4,8] //Gives error

const a = 8
if (a === 8) { //Deeply Equals means 'a' is common in both Value and Type
    console.log("Yes")
} 
else {
    console.log("THERE'S NO SHOT!")
}

//Modulus Operator: gives the remainder of parameters
console.log("Modulus")
console.log(20 % 4)
console.log(5 % 4)
//Increment Operator
console.log("Increment")
let count = 3
count++
console.log(count)
//Decrement Operator
console.log("Decrement")
let counts = 8
counts--
console.log(counts)
//Unary Negation Operator
console.log("Unary Negation")
let x = 6
console.log(-x) //makes a variable or such, negative
//Unary Plus Operator
console.log("Unary Plus")
let c = "3"
console.log(+c) //turns String(s) of numbers into number Types
//Exponential Operator
console.log("Exponential")
let r = 6
console.log(r ** 2)