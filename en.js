const encrement=document.querySelector('#encrement')
const resetbutton= document.querySelector('#reset')
const h1=document.querySelector('h1')
let startvalue=0
encrement.addEventListener('click',function(){
    startvalue++;
h1.innerHTML=startvalue
})
resetbutton.addEventListener('click',function(){
    startvalue--;
h1.innerHTML=startvalue
h1.innerHTML=0
})