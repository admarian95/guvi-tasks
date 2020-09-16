function wrap(wrapParent, wrapChildren) {
    wrapChildren.forEach(a => {
        wrapParent.append(a);
    });
    return wrapParent;
}
function createDiv(className, text = '') {
    let h = document.createElement('div');
    if (className !== '') {
        className.forEach(el => h.classList.add(el));
    }
    h.innerText = text;
    return h;
}
function createImg(classes) {
    let im = document.createElement('img');
    classes.forEach(el => im.classList.add(el));
    return im;
}
function createPara( text = '') {
    let p = document.createElement('p');
    p.innerText = text;
    return p;
}
function createButton(id, text) {
    let btn = document.createElement('button');
   btn.setAttribute('id',id);
    btn.innerText = text;
    return btn;
}
function createSpan() {
    let span = document.createElement('span');
    return span;
}

let container = createDiv(['container'])
let h5 = document.createElement('h5');
h5.innerText = 'PLAY QUIZ';

let play = createPara();
let playBtn = createButton("play","PLAY");
play = wrap(play,[playBtn]);
let highScore = createPara();
let highScoreBtn = createButton("highScore","HIGH SCORES");
highScore = wrap(highScore,[highScoreBtn]);
container.append(h5,play,highScore);
document.body.append(container);
playBtn.addEventListener('click',()=>window.location.href='./game/game.html');
highScoreBtn.addEventListener('click',()=>window.location.href='./highscores/highscores.html');