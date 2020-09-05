let mainContainer = document.getElementById('main_container');
let ip = document.getElementById('name');
let enter = document.getElementById('enter');
let clear = document.getElementById('clear');
mainContainer.addEventListener('click',(e)=>console.log(e.target.innerText));
clear.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log(ip.innerText);
    
})

ip.addEventListener('input',(e)=>console.log(e));