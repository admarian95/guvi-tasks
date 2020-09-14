let nxt = document.getElementById("next");
let count=0;
let score =0;
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
 console.log(correctAnswersArr);
 dataApply(0);
count++;
}
initCall();

function _populateNextData(){
     let ans = document.querySelector('div.is-selected').innerText;
     correctAnswersArr.indexOf(ans)>-1 ? score+=10:null;
     console.log(score);
     dataApply(count++);
}

function dataApply(count){
     if(count<=9){
     question.innerText = data[count].question;
     console.log(data);
     let random = Math.floor(Math.random()*4);
     answers[random].innerText = data[count].correct_answer;
     let arr = Array.from(answers);
     arr.splice(random,1);
     arr.forEach((el,i)=>el.innerText = data[count].incorrect_answers[i]);
     }else{
          nxt.disabled=true;
     }
}

function _optionSelected(e){
     answers.forEach(el=>{
          if(el.classList.contains('is-selected')){
               el.classList.remove('is-selected');
          }
     });
     e.target.classList.add('is-selected');
}