const array=[
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Chicago' },
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'Dave', age: 40, city: 'Chicago' } 
    
]

let property=prompt('Group by Age or City?')
if(property==='City'){
    let result=array.reduce((acc, CurrentItem) =>{
        acc[CurrentItem.city]=acc[CurrentItem.city] || []
        acc[CurrentItem.city].push(CurrentItem);
        return acc
    
    },{});
    console.log(result)
} else{
    let result=array.reduce((acc, CurrentItem) =>{
        acc[CurrentItem.age]=acc[CurrentItem.age] || []
        acc[CurrentItem.age].push(CurrentItem);
        return acc
    
    },{});
    console.log(result)
}


    





    

// }

// function GroupBy(param1){
//     let objects=[
//         { name: 'Alice', age: 25, city: 'New York' },
//         { name: 'Bob', age: 30, city: 'Chicago' },
//         { name: 'Charlie', age: 35, city: 'New York' },
//         { name: 'Dave', age: 40, city: 'Chicago' }
//     ]
//     for(let i=0;i<5;i++){
//         let cityname= 'New York'
//         if(objects[i].city=cityname){
//             console.log(objects[i])
//         } else {
//             console.log(objects[i])
//         }
//         return 

//     }
     
    
// }



    


