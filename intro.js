// Comments
// 
console.log("hello");

let x = 5;
// let y = 10;
y = x + 2;  // give it the value of x + 2
// Single line comments   //
// Multiline Comments
/* */

// Variables
// three methods to declare variables
// 1. Var 
// 2. Let
// 3. Const
// 4. Default
// x=5;
// const Pi = 3.14;
// Let  - > Block Scope
{
    let x = 2;
    x = x +10;

}
// x can not be used here

// Var -> Global Scope
{
    var y = 2;

}
y = 10;

// x can be used here

// const -> Block Scope
const PI = 3.14;


// Operators
// + , - , * , / , % , ++(Increment) , --(Decrement) , **
let a = 5;
let w = a*2;  //10
let z = a ** 2; //25

// Assignment Operators
// = , += , -= ,*=, /= ,%= , **=

// C ,C++ 
// let ,var
// Datatypes - String ,Int , BigInt , Boolean , Undefined , Null , Object
// Built-in Object Types -- objects , arrays ,dates , maps ,sets , more
let v = true;

// object
let person = {
    firstName:"Anushka",
    lastName:"Raj Jain"
}

// Arrays
let cars = ["Bmw" , "volvo"];

// Date object
const date = new Date();
date.getDate();

// Functions ()
function functionName(p1,p2){
   

    return p1 + p2 ;
}

let g = addtionFunc(4,3);  // g =12

function addtionFunc(a,b){
    return a * b;
}








