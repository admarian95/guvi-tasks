function createDOM(){
    let container = document.createElement('div');
    container.classList.add("container");
    let h4 = document.createElement('h4');
    h4.innerText = 'HIGH SCORES';
    let ul = document.createElement('ul');
    let button = document.createElement('button');
    button.setAttribute('id','goHome');
    button.innerText = 'GO HOME';
    container.append(h4,ul,button);
    document.body.append(container);
}

createDOM();


let goHomeBtn = document.getElementById('goHome');
goHomeBtn.addEventListener('click',()=>window.location.href ='../index.html');
let ul = document.getElementsByTagName('ul')[0];
function createLI(){
    let li = document.createElement('li');
    return li;
}
function createSpan(className){
    let span = document.createElement('span');
    span.classList.add(className);
return span;
}

function _updateHighScore(){
    let userArr = JSON.parse(localStorage.getItem('user'));
    userArr.map(el=> el['score'] = +el['score']);
    userArr.sort((a,b)=> b['score']-a['score']);
    for(let i = 0;i<userArr.length;i++){
        let li =createLI();
        let userSpan = createSpan('username');
        let score = createSpan('score');
        userSpan.innerText = userArr[i]['username'] +" - ";
        score.innerText = userArr[i]['score'];
        li.append(userSpan,score);
        ul.append(li);
    }
}
_updateHighScore();