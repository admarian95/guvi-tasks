// 1. Write a function called 'printAllValues' 
//    which returns an newArray of all the input object’s values.

let obj = {name : 'RajiniKanth', age : 33, hasPets : false};

let tempArray=[];

function printAllValues(obj) {

    for(let key in obj){
        tempArray.push(obj[key]);
    }
}
printAllValues(obj);
console.log(tempArray);

// 2 Write a function called 'printAllKeys' 
//   which returns an newArray of all the input object’s keys.

let keyArray=[];
function printAllKeys(obj) {

    for(let key in obj){
        keyArray.push(key);
    }
}
printAllKeys(obj);
console.log(keyArray);

// 3 Write a function called 'convertObjectToList' which 
//   converts an object literal into an array of arrays.

let objArray=[];
let object = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertObjectToList(obj){

    for(let key in obj){
        objArray.push([key,obj[key]]);
    }
}
convertObjectToList(object);
console.log(objArray);


// 4 Parsing a list and transform the first and last elements of it:

let array4 = ['GUVI', 'I', 'am', 'Geek'];
let obj4={};

function transformFirstAndLast(arr){
obj4[arr[0]] = arr[arr.length-1];
}
transformFirstAndLast(array4);
console.log(obj4);

// 5 Write a function 'fromListToObject' which takes in an array of arrays, and returns 
//   an object with each pair of elements in the array as a key-value pair.

let array5 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
let obj5={};

function fromListToObject(arr){

    for(let i=0;i<arr.length;i++){
        obj5[arr[i][0]]= arr[i][1];
    }
}

fromListToObject(array5);
console.log(obj5);

// 6 Parsing a list of lists and convert into a JSON object:

let array6 = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
let obj6={};

function transformGeekData(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
        obj6[arr[i][j][0]] = arr[i][j][1];
        }
        arr[i] =obj6;
        obj6={};
    }
}
transformGeekData(array6);
console.log(array6);


// 7 Write an 'assertObjectsEqual' function from scratch.
//Assume that the objects in question contain only scalar values 
//(i.e., simple values like strings or numbers).

let expected = {foo: 5, bar: 6};
let actual = {foo: 5, bar: 1};
let flag=true;
function assertObjectsEqual(actual,expected){

    for(let key in actual){
        if(actual[key] !== expected[key]){
            flag=false;
        }
    }
    console.log(flag?"Passed":"Failed");
}

assertObjectsEqual(actual,expected);


// 8. Parsing JSON objects and Compare:

let securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ];
   let q = 'What was your first pet’s name?';
   let a  =  'FlufferNutter';
function chksecurityQuestions(securityQuestions,question,answer) {

    for(let i=0;i<securityQuestions.length;i++){
        if(securityQuestions[i].question == question &&  (securityQuestions[i].expectedAnswer == answer )){
            return true;
        }
    }
    return false;
}
console.log(chksecurityQuestions(securityQuestions,q,a));

// 9 Write a function to return the list of characters below 20 age

let students = [
    {
    name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];

    function returnMinors(arr){

        for(let i=0;i<arr.length;i++){
            if(arr[i].age>18){
               arr.splice(i,1);
               i--;
            }
        }
        return arr;
    }
    console.log(returnMinors(students));
