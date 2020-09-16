function wrap(wrapParent, wrapChildren) {
    wrapChildren.forEach(a => {
        wrapParent.append(a);
    });
    return wrapParent;
}

function createPara(classes, text = '') {
    let p = document.createElement('p');
    classes.forEach(el => p.classList.add(el));
    p.innerText = text;
    return p;
}
function createButton(id, text) {
    let btn = document.createElement('button');
    btn.setAttribute('id',id);
    btn.innerText = text;
    return btn;
}
function createSpan(innerText) {
    let span = document.createElement('span');
    span.innerText = innerText;
    return span;
}

function createDOM(){
let container = document.createElement('div');
container.classList.add('container');
let score = createPara(['score'],'SCORE :');
score.appendChild(document.createElement('span'));
let input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('placeholder','username')
input.setAttribute('id','username');
let saveScoreBtn = createButton('saveScoreBtn','Save');
saveScoreBtn.setAttribute('disabled','');
saveScoreBtn = wrap(document.createElement('p'),[saveScoreBtn]);
let playAgain = createButton('playAgain','Play Again');
playAgain = wrap(document.createElement('p'),[playAgain]);
let goHome = createButton('goHome','Go Home');
goHome = wrap(document.createElement('p'),[goHome]);
container.append(score,input,saveScoreBtn,playAgain,goHome);
document.body.append(container);
}



createDOM();

let input = document.getElementById('username');
let score = document.querySelector('.score span');
let saveBtn = document.getElementById('saveScoreBtn');
let playAgain = document.getElementById('playAgain');
let goHome = document.getElementById('goHome');
let user={};
input.addEventListener('keyup',_keyPressed);
score.innerText = localStorage.getItem('score');
function _keyPressed(){
if(input.value !==''){
saveBtn.removeAttribute("disabled");
}else{
    saveBtn.setAttribute("disabled",true);
}
}
saveBtn.addEventListener('click',()=>{
    if(!localStorage.getItem('user')){
        user['username'] = input.value;
        user['score'] = score.innerText;
        localStorage.setItem('user',JSON.stringify([user]));
    }
    else{
        let userArr = JSON.parse(localStorage.getItem('user'));
        let newUser = {
            'username':input.value,
            'score': score.innerText
        }
        userArr.push(newUser);
        localStorage.setItem('user',JSON.stringify(userArr));
    }
    input.value='';
    _keyPressed();
    input.setAttribute('disabled',true);
})

playAgain.addEventListener('click',()=>window.location.href='../game/game.html');
goHome.addEventListener('click',()=>window.location.href='../index.html');