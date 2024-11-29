// const tinder= new Object()
// console.log(tinder)// give {}
//  const newTinder ={}
//  newTinder.name= "Shailesh",
//  newTinder.email="shailesh@google.com",
//  newTinder.age= 23,
//  newTinder.isLoggedIn= true,

//  console.log(newTinder)

 
const  newObject= {
    name: "Shailesh",
    full_name: "Shailesh Pal",
    userName: "Shailesh",
    userFullName: {
        firstName: "Shailesh",
        lastName: "Pal"
    }
};
//console.log(newObject.userFullName.firstName);



const obj1= {1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const object3 = Object.assign({},obj1, obj2)//      for combine/ merge the objects
// console.log(object3)


object3={...obj1,...obj2}// important feature here to combine the two objects .
console.log(object3)