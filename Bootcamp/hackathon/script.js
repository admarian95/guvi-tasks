let addQuery = document.getElementById('addQuery');
let sort = document.getElementById('sort');
let username;
let order = document.getElementById('order');
let addQueryContent = document.querySelectorAll('.add-query-content')[0];
let addSortContent = document.querySelectorAll('.add-sort-content')[0];
let duplicateAddQueryContent;
let removeParam = document.querySelectorAll('.remove-query-param')[0];
let addQueryParam = document.querySelectorAll('.add-query-param')[0];
let wrapper = document.querySelectorAll('.query-el-wrapper');
let resultStr = document.querySelectorAll('.result-string')[0];
let queryEl = document.querySelectorAll('.query-el-wrapper')[0].firstElementChild;
let nameInput = document.querySelectorAll('.content .name input')[0];
let lessComparators = document.querySelectorAll('.comparators .less')[0];
let equalComparator = document.querySelectorAll('.comparators .equal')[0];
let greaterComparator = document.querySelectorAll('.comparators .greater')[0];
let baseQuery = 'https://api.github.com/search/users?q=';
let subQuery='';
let submitBtn = document.querySelectorAll('.submitBtn button')[0];
addQuery.addEventListener('click', ()=>_add());
removeParam.addEventListener('click',e=>_removeParam(e));
addQueryParam.addEventListener('click',e=>_addQueryParam(e));
document.querySelectorAll('.comparators button').forEach(a=>{
    a.addEventListener('click',e=>_comparatorClicked(e));
});
let ctr =1;

_add = ()=>{
    addSortContent.style.display="none"
    addQueryContent.style.display='block';
if(ctr === 1){
    wrapper[0].classList.add('is-visible');
    setTimeout(()=>{
        queryEl.classList.add('is-visible');
    },0)
    ctr++;
}else{
    duplicateAddQueryContent = wrapper[0].cloneNode(true);
    let removeSpan = duplicateAddQueryContent.querySelectorAll('.remove-query-param')[0];
    let addSpan = duplicateAddQueryContent.querySelectorAll('.add-query-param')[0];
    let btns = duplicateAddQueryContent.querySelectorAll('.comparators button');
    btns.forEach(a=>{
        a.addEventListener('click',(e)=>_comparatorClicked(e));
    })
    addSpan.addEventListener('click',(e)=>_addQueryParam(e));
    removeSpan.addEventListener('click',(e)=>_removeParam(e));
    addQueryContent.appendChild(duplicateAddQueryContent);
}
}

_removeParam = (e) =>{
let span = e.currentTarget;
let str = _fetchValuesOfSubQuery(e);
console.log(str);
_removeSubStrFromMain(str);
let parentWrapper = span.closest('.query-el-wrapper');
parentWrapper.remove();
}

_addQueryParam=(e)=>{
    subQuery="";
    subQuery = _fetchValuesOfSubQuery(e);
    // e.currentTarget.style.display='none';
console.log(subQuery);
_appendToMainString(subQuery);
}

nameInput.addEventListener('input',(e)=>{
    username = e.currentTarget.value;
   let str = baseQuery + username;
    resultStr.textContent = str;
    if(e.currentTarget.value === ''){
        submitBtn.setAttribute('disabled',true);
        submitBtn.style.color = 'red';
    }else{
        submitBtn.removeAttribute('disabled');
        submitBtn.style.color = 'white';
    }
});

_comparatorClicked =(e)=>{
    e.currentTarget.closest('.query-el').querySelectorAll('.comparators button').forEach(a=>{
        if(a.classList.contains('selected')){
            a.classList.remove('selected');
        }
    });
    e.currentTarget.classList.add('selected');
}

_appendToMainString=(val,pre='')=>{
let str = resultStr.textContent;
if(pre=== ''){
str += '+'+val;
}else{
    str += pre +val;
}
resultStr.textContent = str;
}

_fetchValuesOfSubQuery=(e)=>{
    let subQuery = '';  
    let ipText = e.currentTarget.closest('.query-el').querySelectorAll('.param input')[0].value;
subQuery += ipText+':';
let selectedComparator = e.currentTarget.closest('.query-el').querySelectorAll('.comparators .selected')[0];
if(selectedComparator !== undefined ){
if(selectedComparator.classList.contains('less')){
    subQuery += '<';
}else if(selectedComparator.classList.contains('equal')){
    subQuery += '';
}else if(selectedComparator.classList.contains('greater')){
    subQuery += '>';
}

let valText = e.currentTarget.closest('.query-el').querySelectorAll('.param-value input')[0].value;
subQuery += valText;
return subQuery;
}else{
return null;
}
}

_removeSubStrFromMain=(val,pre='')=>{
    let str=resultStr.textContent;
    if(pre===''){
    resultStr.textContent = str.replace('+'+val,'');
}
else{
    resultStr.textContent = str.replace(pre+val,'');
}
}
if(nameInput.value === ''){
    submitBtn.setAttribute('disabled',true);
    submitBtn.style.color = 'red';
}else{
    submitBtn.removeAttribute('disabled');
    submitBtn.style.color = 'white';
}
submitBtn.addEventListener('click',e=>_submit(e));
_submit = ()=>{
    localStorage.setItem('API',resultStr.textContent);
    window.location.href = './showUser.html';
}

sort.addEventListener('click',(e)=>_showSort(e));

_showSort=(e)=>{
    addSortContent.style.display="block";
    addSortContent.classList.add('is-visible');
    addSortContent.querySelectorAll('.query-el-wrapper')[0].classList.add('is-visible');
    addSortContent.querySelectorAll('.query-el')[0].classList.add('is-visible');
    addQueryContent.style.display='none';
    let removeSpan = addSortContent.querySelectorAll('.query-el-wrapper .remove-query-param')[0];
    let addSpan = addSortContent.querySelectorAll('.query-el-wrapper .add-query-param')[0]; 
    addSpan.addEventListener('click',(e)=>_addSortParam(e));
    removeSpan.addEventListener('click',(e)=>_removeSortParam(e));
}

_addSortParam=(e)=>{

    subQuery="";
    subQuery = _fetchValuesOfSubQuery(e);
    subQuery = subQuery.replace(':','=');
    // e.currentTarget.style.display='none';
console.log(subQuery);
_appendToMainString(subQuery,'&');
}

_removeSortParam=(e)=>{
    let subQuery='';
    subQuery = _fetchValuesOfSubQuery(e);
    subQuery = subQuery.replace(':','=');
    _removeSubStrFromMain(subQuery,'&');
}