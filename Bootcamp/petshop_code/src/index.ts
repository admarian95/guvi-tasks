import { Availability } from './a';
import { Request } from './b';
 


let addPet =(name:string,color:string,age:number)=>{
    let flag=true;
    if(!localStorage.getItem('pets')){
        let petArray= new Array();
        let petCountArray = new Array();
        petArray.push(a.createPet(name,color,age));
        petCountArray.push({"name":name,"count":1});
        localStorage.setItem('pets',JSON.stringify(petArray));
        localStorage.setItem('petsCount',JSON.stringify(petCountArray));
        } else{
            let st:any = localStorage.getItem('petsCount')! ;
            let pets:any = localStorage.getItem('pets');
            pets=JSON.parse(pets);
            let countPetsArr = JSON.parse(st);
            pets.push(a.createPet(name,color,age));
            localStorage.setItem('pets',JSON.stringify(pets));
            countPetsArr.forEach((el: { [x: string]: any; }) => {
                if(el["name"] == name){
                    el["count"]++;
                    flag=false;
                    }
            });
            if(flag){
                countPetsArr.push({"name":name,"count":1});
            }   
            localStorage.setItem('petsCount',JSON.stringify(countPetsArr));
        }
        window.location.href ='./index.html';
}

let a = new Availability();
window.addEventListener('load',(e:any)=>{
if(e.target.location.pathname ==='/addPet.html'){
    let name = <HTMLInputElement> document.getElementById('name');
    let color = <HTMLInputElement> document.getElementById('color');
    let age = <HTMLInputElement> document.getElementById('age');
    let btn = <HTMLButtonElement> document.querySelector('button');
    btn.addEventListener('click',()=>{
        addPet(name.value,color.value,+(age.value));
        
    });
    console.log(a);
}
if(e.target.location.pathname ==='/req.html'){
    let req = <HTMLInputElement> document.getElementById('req')!;
    let submitReq = <HTMLButtonElement> document.getElementById('reqSubmit');
    submitReq.addEventListener('click',()=>{
        let reqVal = req.value;
        createRequest(reqVal);
        window.location.href ='./index.html';
    });
}
})

let createRequest =(name : string)=>{
    let reqArr = name.split(',');
    if(!localStorage.getItem('req')){
        let r = new Array();
        r.push(reqArr);
        localStorage.setItem('req',JSON.stringify(r));
    }else{
        let req = localStorage.getItem('req')!;
        let reqArray = JSON.parse(req);
        reqArray.push(reqArr);
        localStorage.setItem('req',JSON.stringify(reqArray));
    }
}