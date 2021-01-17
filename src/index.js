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
    console.log('No Name is ' + where)
}
printName() //called outside of function

