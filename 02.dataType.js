// ---------------------------------------------------------------------------------------
//                                Data Type in JavaScript                                                    
// ---------------------------------------------------------------------------------------



// ------------------------------------- 1. Strings --------------------------------------

// let intro = "Hello, My name is Kapil"
// console.log(intro)
// console.log(typeof(intro)) 

// // back tick in Java script(` `)

// let name = "Kapil"
// let age = 25
// let city = "Bhopal"

// let res1 = `My name is ${name} and i am ${age} year old,I am from ${city}`
// console.log(res1)

// ------------------------------------- 2. number --------------------------------------

// let num1= 23
// let num2= 34.5

// console.log(num1, typeof(num1))
// console.log(num2, typeof(num2))

// let res2 = num1 + num2
// console.log(res2, typeof(res2))

// ------------------------------------- 3. number --------------------------------------

let num1= 23000000000000
// let num2 = BigInt(34.50000000) // RangeError: The number 34.5 cannot be converted to a BigInt because it is not an integer
let num3 = BigInt(1111111111111111111)

console.log(num1, typeof(num1))
// console.log(num2, typeof(num2))
console.log(num3, typeof(num3))

// let res2 = num1 + num3
// console.log(res2, typeof(res2))    // TypeError: Cannot mix BigInt and other types, use explicit conversions


// ------------------------ 4. Undefined ------------------------------

let a 
console.log(a)
console.log(typeof(a))


// ------------------------ 5. Undefined ------------------------------

let b = null 
console.log(b)
console.log(typeof(b))        // output type is object (Most important question for interview)

// ---------------------------- 6. Boolean -----------------------------

let is_Available = true
console.log(is_Available, typeof(is_Available))

console.log("====================================")

let is_present = false
console.log(is_present, typeof(is_present))

console.log("====================================")

a=10
b=10.0
console.log(a==b)       // Output = true


// -------------------------- 7. Object ---------------------------------