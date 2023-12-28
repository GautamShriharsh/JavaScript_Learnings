// const user = {
//     username: "Shriharsh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log(`username: ${this.username}`);
//         // console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("Shriharsh", 34, true)
const userTwo = new User("Rohan", 24, false)


console.log(userOne);
console.log(userTwo);

// a new object/instance is created whenever "new" keyword is used
