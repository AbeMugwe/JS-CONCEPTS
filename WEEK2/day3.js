// let title=document.querySelector('.title')
// let sublist=document.querySelector('.sub-list')
let main=document.querySelector('.main')

// main.addEventListener('click',(e)=>{
//     let clicked=e.target
//     if(clicked.id==='1'){
//         document.querySelector('#k').classList.toggle('sub-list')
//     } else if(clicked.id==='2'){
//         document.querySelector('#o').classList.toggle('sub-list')
//     } else if(clicked.id==='3'){
//         document.querySelector('#r').classList.toggle('sub-list')
//     } else if (clicked.id==='4'){
//         document.querySelector('#p').classList.toggle('sub-list')
//     } else if(clicked.id==='5'){
//         document.querySelector('#h').classList.toggle('sub-list')
//     }
// },)

main.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        let sublist=e.target.lastElementChild
        sublist.classList.toggle('sub-list')
    } 
    
})
    
    
    








