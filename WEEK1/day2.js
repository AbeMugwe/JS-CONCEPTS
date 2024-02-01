// let school=prompt('Which school is this?') 
// if (school==='Zindua'){
//     console.log('Coding School, Oshiwaka Road')
// } else {
//     console.log('Other shady school')
// }

/**
 * @LOGICALOPERATORS -
 * @STRICTLYEQUAL - ===
 * @AND - &&
 * @OR - ||
 * @GREATERTHAN - >
 * @LESSTHAN - <
 * @GREATERTHANOREQUAL - >=
 * @LESSTHANOREQUAL - <=
 * @NOT - !
 * @NOTEQUAL - !==
 */

// let name=prompt('What is your name')

// switch(name){
//     case 'Abe':
//         console.log('I am Abe')
//     case 'Mugwe':
//         console.log('I am Mugwe')  
//     default:
//         'Shit name'
//         console.log('Shit name')
//         break;    

// }

//FUNCTIONS
function consoleHello(){
    console.log('Whats good')
}

consoleHello()

//FUNCTIONEXPRESSION
const add=function(a,b){
    return a+b
}
console.log(add(10,20))

//ARROW FUNCTION
const add2=(a,b)=>{
    return a+b
}
console.log(add2(3,5))

setTimeout(()=>{
    console.log('Hello')
},3000)
console.log('Abe')



const name='kj'
const school='pink ACADEMY'
const sentence= `My name is ${name} currently at ${school}`
console.log(sentence)





//FOR LOOPS
/**
 * for(let p=9;p<56; i++)
 */


// let n=parseInt(prompt('Enter Number'))
// let sum=0
// for (let i=1; i<n; i++) {
//     let rem=i%3
//     let rem2=i%5
//     if(rem===0 || rem2===0){
//         sum=sum+ i
        
//     }
// }
// console.log( "Sum:", sum )










// let sexage= prompt("Had sex with what age?")
// let ageofconsent= 18

// if(sexage>=ageofconsent) {
//     console.log("Legal sex");  
// } else {
//     console.log('Pedophile')
// }

