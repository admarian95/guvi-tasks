let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);
createHero();
createResume();
function wrap(wrapParent,wrapChildren){
   wrapChildren.forEach(a=>{
        wrapParent.append(a);
    });
    return wrapParent;
}
function createDiv(className='',text=''){
    let h = document.createElement('div');
    if(className!==''){
    h.classList.add(className);
    }
    h.innerText = text;
    return h;
}
function createImg(src){
    let im = document.createElement('img');
    im.src = src;
    return im;
}
function createPara(text){
    let p = document.createElement('p');
    p.innerText = text;
    return p;
}
function createSpan(text){
    let span = document.createElement('span');
    span.innerText = text;
    return span;
}
function createHeading(text){
    let h3 = document.createElement('h3');
    h3.innerText = text;
    return h3;
}
function createInput(type){
let input = document.createElement('input');
input.type = type;
return input;
}

function createStrong(text){
    let strong = document.createElement('strong');
    strong.innerText = text;
    return strong;
}
function createLi(text){
    let li = document.createElement('li');
    li.innerText = text;
    return li;
}
function createHero(){
    let divImg = createDiv('img');
    let hero = createDiv('hero');
    let detailsDiv = createDiv('details');
    let detailsPara = createPara(`N.Damen Avenue.Chicago 99999||999-999-9999||admarian95@gmail.com|resume.com`);
    let highlighter = createDiv('highlighter');
    let nameImg = createDiv('name_img');
    let img = createImg('profile.png');
    let divName = createDiv('name');
    let pName = createPara('BRIAN DUDLEY');
    nameImg.append(wrap(divImg,[img]))
    nameImg.append(wrap(divName,[pName]));
    hero.append(highlighter,nameImg);
    
    container.append(hero,wrap(detailsDiv,[detailsPara]));
}

function createResume(){
    let resume_details = createDiv('resume_details');
    let left_resume = createDiv('left_resume');
    let right_resume = createDiv('right_resume');
    let spacer = createDiv('spacer');
    right_resume.append(rWorkEx(),createEducation(),createFooter());
    left_resume.append(createProfile(),createSkills(),createWorkEx());
    resume_details.append(left_resume,spacer,right_resume);
 container.append(resume_details); 
}

function createProfile(){
    let text = createDiv('text','Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque voluptatem ullam dolore, doloribus consectetur rerum obcaecati recusandae dicta sint aperiam adipisci debitis possimus');
    let profile = createDiv('profile');
    let wrapperDiv = createDiv();
    let image = createImg('profile.png');
    let imageSpan = createSpan('PROFILE');
    profile.append(wrap(wrapperDiv,[image,imageSpan]));
    profile.append(text);  
    return profile;
}

function createSkills(){
    let skills = createDiv('skills');
    let wrapperDiv = createDiv();
    let image = createImg('profile.png');
    let imageSpan = createSpan('SKILLS');
    let h3 = createHeading('Technical Skills')
    skills.append(wrap(wrapperDiv,[image,imageSpan,h3]));
    let techSkills = createTechSkills();
    let additionalSkills = createAdditionalSkills();
    skills.append(techSkills);
    skills.append(additionalSkills);
    return skills;
}
function createTechSkills(){
let techSkills = createDiv('techSkills');
for(let i=0;i<=2;i++){
    let skill = createDiv('skill');
    let wrapperDiv = createDiv('','JAVASCRIPT');
    let input = createInput('range');
    techSkills.append(wrap(skill,[wrapperDiv,input]));
}
return techSkills;
}

function createAdditionalSkills(){
    let additionalSkills = createDiv('additionalSkills');
    let h3 = createHeading('Additional Skills');
    additionalSkills.appendChild(h3);
    for(let i=0;i<=2;i++){
        let skill = createDiv('skill');
        let wrapperDiv = createDiv('','JAVASCRIPT');
        let input = createInput('range');
        additionalSkills.append(wrap(skill,[wrapperDiv,input]));
    }
    return additionalSkills;
}

function createWorkEx(){
    let workEx = createDiv('workEx');
    let wrapper = createDiv();
    let image = createImg('profile.png');
    let imageSpan = createSpan('WORK EXPERIENCE');
    workEx.append(wrap(wrapper,[image,imageSpan]));
    let mainHeading = createDiv('main_head');
    let heading  = createDiv('heading');
    let strong = createStrong('Event Manager');
    let wrapper1 = createDiv('','03/02/21 - 01/09/24');
    let wrapper2 = createDiv('',`C3 Presets,Washington DC`);
    let ul = document.createElement('ul');
    for(let i=0;i<=2;i++){
        let li = createLi(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. A accusamus numquam vero.`);
        ul.append(li);
    }
    mainHeading.append(wrap(heading,[strong,wrapper1]));
    mainHeading.appendChild(wrapper2);
    workEx.append(mainHeading);
    workEx.append(ul);
    return workEx;
}
function rWorkEx(){
    let workEx = createDiv('workEx');
    let wrapper = createDiv();
    let p = createPara('Gay and Lesbain Elder Households Presets,Washington DC');
    let ul = document.createElement('ul');
    let image = createImg('profile.png');
    let imageSpan = createSpan('WORK EXPERIENCE');
    workEx.append(wrap(wrapper,[image,imageSpan]));
    let main_heading = createDiv('main_head');
    let heading = createDiv('heading');
    let strong = createStrong('Communty Relation Manager');
    let cont = createDiv('','03/02/21 - 01/09/24');
    main_heading.append(wrap(heading,[strong,cont]),p);
    workEx.append(main_heading);
    for(let i=0;i<=3;i++){
        let li = createLi('Lorem ipsum dolor, sit amet consectetur adipisicing elit. A accusamus numquam vero.');
        ul.appendChild(li);
    }
    workEx.appendChild(ul);
    return workEx;
}

function createEducation(){
    let education = createDiv('education');
    let wrapper = createDiv();
    let ul = document.createElement('ul');
    let p = createPara('Thinkful Chicago IL');
    let image = createImg('profile.png');
    let imageSpan = createSpan('EDUCATION');
    let strong = createStrong('Enginnering Immersion Program');
    let cont = createDiv('','03/02/21 - 01/09/24');
    education.append(wrap(wrapper,[image,imageSpan]));
    let mainHead = createDiv('main_head');
    let heading = createDiv('heading');
    mainHead.append(wrap(heading,[strong,cont]),p);
    education.append(mainHead);
    let wrapper1 = createDiv('',`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aut placeat tenetur rerumvoluptates labore consequatur fugit, consequuntur eos architecto`);
education.appendChild(wrapper1);
for(let i=0;i<=3;i++){
    let li = createLi('Lorem ipsum dolor, sit amet consectetur adipisicing elit. A accusamus numquam vero.');
    ul.appendChild(li);
}
education.appendChild(ul);
return education;
}

function createFooter(){
    let foot = createDiv('foot');
    let span = createSpan('University of California LA');
    let heading = createDiv('heading');
    let strong = createStrong('BA,English');
    let div = createDiv('','03/02/21 - 01/09/24');
    foot.append(wrap(heading,[strong,div]),span);
    return foot;
}