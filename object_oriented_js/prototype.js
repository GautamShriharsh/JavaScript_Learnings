

// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
// }

// Object.prototype.CustomMethod = function(){
//     console.log(`This is a custom function and is present in all objects`);
// }

// heroPower.CustomMethod()
// myHeros.CustomMethod()

// Array.prototype.AnotherMethod = function(){
//     console.log(`This method was injected in Array prototype only`);
// }

// myHeros.AnotherMethod()
// // heroPower.AnotherMethod() -- This doesn't work

// // inheritance

// //Old syntax

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Shriharsh   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()

"Coding".trueLength()
"Coffee".trueLength()
