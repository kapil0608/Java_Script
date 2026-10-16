// // --------------------------------------------------------------------------------------
// //                                   1. var variable 
// // --------------------------------------------------------------------------------------

// var name= "Kapil Sharma"
// var place= "Bhopal"
// var num=1
// var float_num = 11.5
// console.log(name,typeof(name))
// console.log(place, typeof(place))
// console.log(num, typeof(num))
// console.log(float_num, typeof(float_num))


// // ------------------- Decleration = Declare the variable not assign the value ------------------------

// var name
// console.log(name)

// // ----------------- Initialization = Assign the value --------------------

// var age = 25
// console.log("Initial Age",age)

// //  ------------------- re-decleration ------------------------------
// var age =50
// console.log("Age after re-decleration:",age)

// // --------------- re-Initialization ------------------

// name="Kapil"
// console.log(name)

// // -------------------- Accessebility inside the block or outside the block --------------------

// var city = "Bangalore"
// {
//     console.log("Inside the block :",city)
//     var year = 2026
// }
// console.log("Outside the block: ",year)

// // ---------------------- Accessebility inside the function or outside the function --------------------------------

// var marks=87
// function marks_in_subject(){
//     console.log("Inside the function",marks)
//     // var language="English"
// }
// //  console.log("Outside the function",language)
//  marks_in_subject()

//                  // function Scope
//                 //  varible only exists inside  the  function, We can not accessed outside the function



// ---------------------------------------------------------------------------------------
//                                   2. let variable 
// ---------------------------------------------------------------------------------------

// let name= "Kapil Sharma"
// let place= "Bhopal"
// let num=1
// let float_num = 11.5
// console.log(name,typeof(name))
// console.log(place, typeof(place))
// console.log(num, typeof(num))
// console.log(float_num, typeof(float_num))


//  ------------------- re-decleration ------------------------------

// let num =50
// console.log("Age after re-decleration:",age)     SyntaxError: Identifier 'num' has already been declared (Not Possible)

// --------------- re-Initialization ------------------

// name="Kapil"
// console.log("After the Initialization : " ,name)       // Re-initialization is possible

// -------------------- Accessability inside the block or outside the block --------------------

// let city = "Bangalore"
// {
//     console.log("Inside the block :",city)           // inside the block accessability is possible
//     // let year = 2026
// }
// // console.log("Outside the block: ",year)             // Outside the block accessability is not possible

// ---------------------- Accessebility inside the function or outside the function --------------------------------

// let marks=87
// function marks_in_subject(){
//     console.log("Inside the function",marks)
//     // var language="English"
// }
//  //  console.log("Outside the function",language)
//  marks_in_subject()

// //                  // function Scope
// //                 //  varible only exists inside  the  function, We can not accessed outside the function




// ---------------------------------------------------------------------------------------
//                                   3. const variable 
// ---------------------------------------------------------------------------------------

const name= "Kapil Sharma"
const place= "Bhopal"
const num=1
const float_num = 11.5
console.log(name,typeof(name))
console.log(place, typeof(place))
console.log(num, typeof(num))
console.log(float_num, typeof(float_num))


//  ------------------- re-decleration ------------------------------

// let num =50
// console.log("Age after re-decleration:",age)     SyntaxError: Identifier 'num' has already been declared (Not Possible)

// --------------- re-Initialization ------------------

// name="Kapil"
// console.log("After the Initialization : " ,name)       // TypeError: Assignment to constant variable. (Re-initialization is not possible

// -------------------- Accessability inside the block or outside the block --------------------

// let city = "Bangalore"
// {
//     console.log("Inside the block :",city)           // inside the block accessability is possible
//     // let year = 2026
// }
// // // console.log("Outside the block: ",year)             // Outside the block accessability is not possible

// ---------------------- Accessebility inside the function or outside the function --------------------------------

// let marks=87
// function marks_in_subject(){
//     console.log("Inside the function",marks)
//     // var language="English"
// }
// //  //  console.log("Outside the function",language)
//  marks_in_subject()

//                   // function Scope
//                  //  varible only exists inside  the  function, We can not accessed outside the function