/**
 * @ARRAYS (LISTS) - e.g [1,2,3,4,5]
 * 
 * 
 *
 */

// let names= ['ok','ew','rt','we']
// let number= [3,5,3,2]
// let mix=['se',1,2,true,undefined,null]

// console.log(mix)

// //ACCESSING ITEMS IN A LIST
// console.log(names[2])

// //GETTING LENGTH OF A LIST
// console.log('Length of names', names.length)

// //ITERATIONS
// for (let i=0;i< names.length;i++){
//     console.log(names[i])
// }

//MANIPULATIONS OF LISTS
//PUSH - ADDS AT THE END
// names.push('wiue')

//POP - REMOVES LAST ITEM FROM ANA ARRAY
// names.pop()

//UNSHIFT ADDS AT BEGGINING OF ARRAY
// names.unshift('tim')

//SHIFT REMOVES STARTING ITEM
// names.shift()


// let num=1
//WHILE LOOP
// while(num<12) {
//     console.log(num)
//     i++

// }

//do while loop
// do{
//     num++
//     console.log(num)
// } while(num<10)


































// Recursive factorial calculation

// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
    

//   }
//   console.log(factorial(7))



//CHALLENGE
function fibonacci(n){
    const fib=[0,1]
    for(let i = 2;i < n; i++) {
    fib.push(fib[i-1] + fib[i-2]);
    }
    return fib
    
}
console.log(fibonacci(0))

// Working with arrays
// let fruits = ["apple", "banana", "cherry"];
// // console.log(fruits[2]); // Accessing an element
// fruits.push("date");   // Adding an element
// console.log(fruits)



  