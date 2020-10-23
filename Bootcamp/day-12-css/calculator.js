
createDOM();

let mainContainer = document.getElementById('main_container');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let btn = document.getElementById('calculate');
let ans = document.getElementById('ans');
let options = document.getElementById('options');
let keyCodes = [48,49,50,51,52,53,54,55,56,57,8,189];
function createOption(val,text){
let opt = document.createElement('option');
opt.setAttribute('value',val);
opt.innerText = text;
return opt;
}
function createDOM(){
let inputDiv = document.createElement('div');
inputDiv.classList.add('input');
let num1label = document.createElement('label');
num1label.innerText = 'Enter Num1:';
let num1 = document.createElement('input');
num1.setAttribute('id','num1');
num1.setAttribute('type','text');
let select = document.createElement('select');
select.setAttribute('id','options');
let opt1 = createOption('ADD','Add');
let opt2 = createOption('SUB','Subtract');
let opt3 = createOption('MUL','Multiply');
let opt4 = createOption('DIV','Divide');
select.append(opt1,opt2,opt3,opt4);
let num2label = document.createElement('label');
num2label.innerText = 'Enter Num2:';
let num2 = document.createElement('input');
num2.setAttribute('id','num2');
num2.setAttribute('type','text');
inputDiv.append(num1label,num1,select,num2label,num2);

let btn = document.createElement('button');
btn.setAttribute('id','calculate');
btn.innerText = 'GET RESULT';
let p = document.createElement('p');
p.innerText = 'Answer:'
let span = document.createElement('span');
span.setAttribute('id','ans');
p.appendChild(span);
document.body.append(inputDiv,btn,p);
}
num1.addEventListener('keydown',(e)=>{
    if(keyCodes.indexOf(e.keyCode) > -1 ){
        num1.innerText = e.key;
    }else{
       alert('invalid');
       e.preventDefault()
    }
});

num2.addEventListener('keydown',(e)=>{
    if(keyCodes.indexOf(e.keyCode) > -1 ){
        num2.innerText = e.key;
    }else{
       alert('Only Numbers Are Allowed!');
       e.preventDefault()
    }
});

btn.addEventListener('click',(e)=>{
   let n1 = +num1.value;
   let n2 = +num2.value;
    let opt = options.value;
if(opt === 'ADD'){
ans.textContent = n1+n2;
}
if(opt === 'SUB'){
    ans.textContent = n1-n2;
    }
    if(opt === 'MUL'){
ans.textContent = n1*n2;
}
if(opt === 'DIV'){
ans.textContent = n1/n2;
}
})

options.addEventListener('change',(e)=>{
    
    console.log(e.target.value);

});