/**
 * @OBJECTS
 * 
 */

let person={
    name:'Tim',
    age:25,
    school:"Wololo",
    personalities:['Smart','Humble','Homophobic'],
    stubborn:false,
    DOB:new Date(1234,10,3),
    hobbies:{
        sports:['Football','Swimming','Basketball'],
        music:['violin','Drums',],
    },
    sound:function(){
        console.log('Im human')
    }


}
//ACCESING ITEMS
person.sound()
console.log(person['DOB'].toDateString())
console.log(person.hobbies.music[0])
person.height='9ft'
console.log(person)


































// const array=[
//     { name: 'Alice', age: 25, city: 'New York' },
//     { name: 'Bob', age: 30, city: 'Chicago' },
//     { name: 'Charlie', age: 35, city: 'New York' },
//     { name: 'Dave', age: 40, city: 'Chicago' } 
    
// ]

// let property=prompt('Group by Age or City?')
// if(property==='City'){
//     let result=array.reduce((acc, CurrentItem) =>{
//         acc[CurrentItem.city]=acc[CurrentItem.city] || []
//         acc[CurrentItem.city].push(CurrentItem);
//         return acc
    
//     },{});
//     console.log(result)
// } else{
//     let result=array.reduce((acc, CurrentItem) =>{
//         acc[CurrentItem.age]=acc[CurrentItem.age] || []
//         acc[CurrentItem.age].push(CurrentItem);
//         return acc
    
//     },{});
//     console.log(result)
// }


    





    



// function groupBy(array,property){
//     let groupedItems={}
//     for(const item of array){
//         let value=item[property]
//         if(!groupedItems[value]){
//             groupedItems[value]=[]
//         }
//         groupedItems[value].push(item)
//     }
//     return groupedItems

// }
// console.log(groupBy(objects,"city"))



    


