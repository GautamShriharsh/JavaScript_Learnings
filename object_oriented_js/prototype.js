// let myName = "Shriharsh   "

// myName.prototype.true
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
}

Object.prototype.CustomMethod = function(){
    console.log(`This is a custom function and is present in all objects`);
}

heroPower.CustomMethod()
myHeros.CustomMethod()

Array.prototype.AnotherMethod = function(){
    console.log(`This method was injected in Array prototype`);
}

// myHeros.AnotherMethod()
heroPower.AnotherMethod()