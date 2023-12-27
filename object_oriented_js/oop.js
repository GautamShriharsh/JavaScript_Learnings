const user = {
    username: "Shriharsh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());