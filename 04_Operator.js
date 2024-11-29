//Arithmatic Operator..
// console.log(3+3)
// console.log(3-3)
// console.log(3*3)
// console.log(3/3)
// console.log(3**3)
// console.log(47%4)
// console.log((3+4)*6)



//Memory area
let userId= "Shailesh"// store in Stack area(For Primitive datatype)
userId="NewName"

let useOne= {                
    email: "shailes@google.com",// Store in Heap memory area(For NonPrimitive )
    age: 24
}
let useTwo= useOne
useTwo.email="mera@gmail.com"
console.log(useTwo)// typeof is-- Object


