const iconbutons =document.querySelector('#iconButton')
const links =document.querySelector('#links')
const closeutton=document.querySelector('#closebutton')

iconbutons.addEventListener('click',function(){
    links.style.display = 'flex'
    closeutton.style.display="block"
    iconbutons.style.display="none"
})

closeutton.addEventListener('click',function(){
    links.style.display='none'
    iconbutons.style.display='block'
    closeutton.style.display="none"
})