function wrap(wrapParent, wrapChildren) {
     wrapChildren.forEach(a => {
         wrapParent.append(a);
     });
     return wrapParent;
 }
 function createDiv(className, text = '') {
     let h = document.createElement('div');
     if (className !== '' || className.length !==0) {
         className.forEach(el => h.classList.add(el));
     }
     h.innerText = text;
     return h;
 }

 function createPara(classes, text = '',id='') {
     let p = document.createElement('p');
     classes.forEach(el => p.classList.add(el));
     if(id !=='') {p.setAttribute('id',id)};
     p.innerText = text;
     return p;
 }
 function createButton(id,className,text) {
     let btn = document.createElement('button');
    btn.setAttribute('id',id);
    btn.classList.add(className);
     btn.innerText = text;
     return btn;
 }
 function createSpan(classes,text='') {
     let span = document.createElement('span');
     classes.forEach(el => span.classList.add(el));
     span.innerText = text;
     return span;
 }

function createLi(classes,text=''){
     let li = document.createElement('li');
     classes.forEach(el => li.classList.add(el));
     li.innerText = text;
     return li;
}
function createDOM(){
let container = createDiv(['container']);
let quest = createDiv(['question'],'What is the capital?');
let overlay = createDiv(['overlay']);
let h1 = document.createElement('h1');
h1.innerText = 'Loading...';
overlay.appendChild(h1);
let progressBar= createDiv(['progressBar']);
progressBar.appendChild(document.createElement('div'));
let p = createPara(['question'],'Question','progressText');
sp1 = createSpan(['qNo']);
sp2 =createSpan([],'/10');
p = wrap(p,[sp1,sp2]);
let options = createDiv(['options']);
let ul = document.createElement('ul');
let button = createButton("next","next",'SUBMIT AND NEXT');
let t;
for (let i=0;i<4;i++){
     let li = createLi(['choice-text']);
     if(i===0){
          t='A';
     } if(i===1){
          t='B';
     } if(i===2){
          t='C';
     } if(i===3){
          t='D';
     }
let opt = createDiv(['opt'],t);
let ans = createDiv(['answer-option']);
li = wrap(li,[opt,ans]);
ul.append(li);
}
ul.appendChild(button);
options.appendChild(ul);
container.append(p,progressBar,quest,options);
document.body.append(overlay,container);
}


createDOM();

let nxt = document.getElementById("next");
let count=0;
let score =0;
localStorage.setItem('score',0);
nxt.addEventListener('click',_populateNextData)
let question = document.querySelector('div.question');
let answers = document.querySelectorAll('.answer-option');
answers.forEach(el=>el.addEventListener('click',_optionSelected));
let data;
let correctAnswersArr;
 function fetchData(){
     return new Promise(resolve => {
          fetch(' https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
          .then(d=>d.json())
          .then(d=>resolve(d.results))});
}
async function initCall(){
 data = await fetchData();

 correctAnswersArr = data.map(el=>el.correct_answer);
 await dataApply(0);
 document.querySelector('.overlay').classList.add('is-loaded');
 document.querySelector('.container').classList.add('is-visible');
 setTimeout(()=>{
     document.querySelector('.overlay').classList.add('display-none');
 },0);
 updateDOM(count);
count++;
}
initCall();

function _populateNextData(){
     if(count<=9){
     let ans = document.querySelector('div.is-selected');
     if(ans!==null){correctAnswersArr.indexOf(ans.innerText)>-1 ? score+=10:score=score};
     updateDOM(count);
     dataApply(count++);
     }else{
          localStorage.setItem('score',score);
          window.location.href ='../end/end.html';
     }
}

function dataApply(count){
     if(count<=9){
     question.innerText = data[count].question;
     let random = Math.floor(Math.random()*4);
     answers[random].innerText = data[count].correct_answer;
     let arr = Array.from(answers);
     arr.splice(random,1);
     arr.forEach((el,i)=>el.innerText = data[count].incorrect_answers[i]);
     }if(count===9){
          nxt.innerText ="SUBMIT QUIZ";
     }
     return true;
}

function _optionSelected(e){
     answers.forEach(el=>{
          if(el.classList.contains('is-selected')){
               el.classList.remove('is-selected');
          }
     });
     e.target.classList.add('is-selected');
}

function calculateProgressBarWidth(count){
     if(count <=9){
      document.querySelector('.progressBar div').style.width = (+(count+1)/10)*100 + "%";
     }
}

function questionNoUpdate(count){
     if(count<=9){
     document.querySelector('#progressText .qNo').innerText = count+1;
     }
}
function updateDOM(count){
     calculateProgressBarWidth(count);
     questionNoUpdate(count);
}