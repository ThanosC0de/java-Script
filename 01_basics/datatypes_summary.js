// primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2133546888845n

// Reference (non primitive)

// array, objects, functions


const heros = ["ironeman", "thore"]
let myObj = {
    name: "sahil",
    age: 22,
}

const myFunction = function(){
    console.log("hello");
}

console.log(typeof bigNumber);