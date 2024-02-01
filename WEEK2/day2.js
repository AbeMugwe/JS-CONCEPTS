document.body.style.backgroundColor='Red'

const firstcolor=document.body.style.backgroundColor

let button1= document.querySelector('.btn1')
let button2= document.querySelector('.btn2')

button1.style.backgroundColor='green'
button2.style.backgroundColor='Yellow'

button1.addEventListener('click',(e) =>{
    e.stopPropagation()
    document.body.style.backgroundColor='Green'
})

button2.addEventListener('click',(e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor='Yellow'

})

document.body.addEventListener('click',()=>{
    if(document.body.style.backgroundColor!==firstcolor){
        document.body.style.backgroundColor= firstcolor

    }

} )