const parentContainer= document.querySelector('.parent')

// const childContainer= document.createElement('div')
// childContainer.classList.add('child')
// childContainer.innerText='Kipu is a student'
// parentContainer.appendChild(childContainer)

// const innerChild=document.createElement('div')
// innerChild.classList.add('innerChild')
// innerChild.innerText='He studies at Zindua'
// childContainer.appendChild(innerChild)

parentContainer.innerHTML=`
    <div class='child'>
        <p>Child</p>
        <div class='innerChild'>
            <p>Innerchild</p>
        </div>
    </div>

`


console.log(childContainer)