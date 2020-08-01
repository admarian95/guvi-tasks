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

