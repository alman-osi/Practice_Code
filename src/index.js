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

//'let' vs 'var'
function Find() {
    let x = 1
    console.log('show me rock ' + x) //x = 1 
    {
        let x = 2
        console.log('show me rock, again ' + x) //x = 2
    }
}
Find()

//'const' vs 'var
const cue = [1,2,3,5] // Cannot be changed once declared

cue = [1,2,4,8] //Gives error
