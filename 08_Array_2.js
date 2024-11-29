

const jsUser={
    name: "Shailesh",
    "full name": "Shailesh Pal",
    age:18,
    location:"Jaipur",
    email:"shailesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser["full name"])
// console.log(jsUser.age)
// console.log(jsUser.location)
// console.log(jsUser.email)
// console.log(jsUser.isLoggedIn)
// console.log(jsUser.lastLoginDays)


// Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log(`Hello world ${this.name}`)
}
//console.log(jsUser.greeting)
console.log(jsUser.greeting())


