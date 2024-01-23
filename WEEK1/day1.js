// //var
// var name='Abe'
// //Declare
// var name='Tony'

// //Reassign
// name='Horse'


//let
//NoDeclaring
let name='Tim'
//let name='ump'

//reassign
name='ump'

//const
//const name='Bob'

//How to take notes
/**
 * @var
 * You can redeclare a variable
 * eg. var='Abe'
 * var='James
 * You can reassign a variable
 * var name='Cheese'
 * name'Tim'
 * Globally scoped
 * 
 * @let
 * You cant redeclare a variable
 * let name='Tim'
 * let name= 'Kipu'
 * either LOCAL OR GLOBAL
 * 
 * @const
 * You cannot redeclare a variable
 * const name='Abe'
 * const name= 'jones'
 * You cant reassign a variable
 * const name= 'Jon'
 * name='Hefty'
 * either LOCAL OR GLOBAL
 */


//DATA TYPES
/**Primitive Data types
 * @STRINGS - Characters/numbers wrapped in quotes - 'Abe', '567'
 * @NUMBERS - Decimal, Whole numbers, Negative numbers - 1,1.5,-1
 * @BOOLEANS - True/False statements
 * @UNDEFINED - No value assigned
 * @NULL - Nothing
 * 
 */

/**Non-primitive Data types
 * @LISTS - Arrays - [1,2,3,4,5],[DO,RE,MI,FA]
 * @Objects - Dictionaries(key/value pairs); {name:'Abe'}
 * 
 * 
 */

//MATH OPERATORS
/**
 * @ADDITION - +
 * @DIVISION - /
 * @SUBTRACTION  -
 * @MULTIPLICATION - *
 * @MODULUS - %
 */

//COMPARISON OPERATORS
//Revenue
//Expenses
//Cost of goods sold

const sockcost= 50
const bagcost= 50
const batchcost= (sockcost * 3)
const sellingprice= 1000
const revenue= (sellingprice * 30)* 0.7

const sockbought= sockcost * 90
const bagbought= bagcost * 30

const profit= revenue- (sockbought +bagbought)

console.log(profit)

//parseInt
//parsefloat
//Number
let length= prompt("Length Ni?")
let width= prompt("Width ni?")
let area= length * width
length= parseInt(length)
width= parseInt(width)



console.log(length)
console.log(width)
console.log( "Area:", area )
