//Write a loop that makes seven calls to console.log to output the following triangle
console.log("--------------------------------------------------------------");
let str;
for(let i=0;i<=7;i++){
    str=''
    for(let j=0;j<i;j++){
       str +="#"; 
    }
    console.log(str);
}
console.log("--------------------------------------------------------------");
//Iterate through the string array and print it contents

let strArray= ["<option>Jazz</option>"
      ,"<option>Blues</option>"
      ,"<option>New Age</option>"
      ,"<option>Classical</option>"
      ,"<option>Opera</option>"];

for(let i=0;i<strArray.length;i++){
    console.log(strArray[i]);
}
console.log("--------------------------------------------------------------");

// write a code to count the elements in the array . Don’t use length property

let myarray=[11,22,33,44,55];
let i=0,ctr=0;
while(myarray[i]!==undefined){
ctr++;
i++;
}
console.log(ctr);

console.log("--------------------------------------------------------------");
// find your fifth favorite food

let foods=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log("5th el  =   "+foods[4]+ "    length=  "+foods.length);

console.log("--------------------------------------------------------------");

//Starting from the existing friends variable below, 
//change the element that is currently "Mari" to "Munnabai".

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jef",
    "AAK chandran"
    ];
for(let i=0;i<friends.length;i++){
    if(friends[i]==="Mari"){
        friends[i]="Munnabai";
    }
}
console.log(friends);
console.log("--------------------------------------------------------------");

//Starting from the friends variable below,
// Loop and Print the names till you meet CaptianAmerica.

let friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jef",
    "AAK chandran"
    ];

    function dataHandling(input){
        for (let i = 0; i < input.length; i++) {
        if(input[i]==="CaptianAmerica"){
            break;
        }else{
            console.log(input[i]);
        }

        }
    }
    dataHandling(friends1);
console.log("--------------------------------------------------------------");

//Find the person is ur friend or not

let friends2 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];

    function dataHandling1(input, name){
        for (var i = 0; i < input.length; i++) {
            if(input[i]===name){
                return true;
            }if((input[i]!==name)&&(i==input.length-1)){
                return false;
            }
        }
    }

    let found =dataHandling1(friends2,"Jef");
    console.log(found);
console.log("--------------------------------------------------------------");

//We have two lists of friends below.
//Use array methods to combine them into one alphabetically-sorted list.

let friends3 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
let friends4 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET"
        ];

        function dataHandling3(input1,input2){
        let tempArr=[];
        for(let i=0;i<input1.length;i++){
            tempArr.push(input1[i]);
        }
        for(let i=0;i<input2.length;i++){
            tempArr.push(input2[i]);
        }
        tempArr.sort();
        return tempArr;
        }
        let sortedArr = dataHandling3(friends3,friends4);
        console.log(sortedArr);
console.log("--------------------------------------------------------------");

//Get the first item, the middle item and the last item of the array

console.log("1st element: "+friends4[0]+"  mid element:"+ friends4[parseInt(friends.length/2)]+"  last element "+friends4[friends4.length-1]);

console.log("--------------------------------------------------------------");

//Add your name to the end of the friends array, and add another name to beginning.

friends4.splice(0,0,"Apoorv");
friends4.splice(friends4.length,0,"Dham");
console.log(friends4);

//Add Mr or Ms to the names in the friends array.

let str1="Mr ";
let x = friends4.map(a=>  str1+a);
console.log(x);
console.log("--------------------------------------------------------------");

//Concat all the names the friends array and return as comma "," seperated string.

console.log(friends.join(","));

console.log("--------------------------------------------------------------");

//Find the friends names who has letter ‘a’ and return the list.
let tempArray1=[];
for(let i=0;i<friends1.length;i++){
   if(friends1[i].includes('a')){
    tempArray1.push(friends1[i]); 
   }
}
console.log(tempArray1);
console.log("--------------------------------------------------------------");

//Find the avg length of all the friends names.
// Get the individual length of the names and do the avg.
let len=0;
for(let i=0;i<friends1.length;i++){
len +=friends1[i].length;
}
console.log("average length of friends names   "+parseInt(len/friends1.length));
console.log("--------------------------------------------------------------");

// Find the names and return the list starting with letter M.
let tempArray2=[];
for(let i=0;i<friends1.length;i++){
    if(friends1[i].startsWith('M')){
     tempArray2.push(friends1[i]); 
    }
 }
 console.log(tempArray2);
 console.log("--------------------------------------------------------------");

 //Find the name with max characters and return the name
 let max=0;
 for(let i=0;i<friends1.length;i++){
 max = Math.max(max,friends1[i].length);
}
for(let i=0;i<friends1.length;i++){
    if(friends1[i].length==max){
        console.log("maxLength name: " +friends1[i]);
    }
   }
console.log("--------------------------------------------------------------");

//Find the name with min characters and return the name.

let min=friends[0].length;
 for(let i=0;i<friends1.length;i++){
 min = Math.min(min,friends1[i].length);
}
for(let i=0;i<friends1.length;i++){
    if(friends1[i].length==min){
        console.log("minLength name: " +friends1[i]);
    }
   }
console.log("--------------------------------------------------------------");

//Find the average in the array below.

let friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let info = friendsInfo.filter(a=>{ return typeof a== 'number'});
let sum=0;
for(let i=0;i<info.length;i++){
    sum+=info[i];
}
console.log("average in the array   "+parseInt(sum/info.length));
console.log("--------------------------------------------------------------");

//Print the contents of the input variable

let input2 = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];

    function dataHandling4(input){
        console.log(input.length);
        for (let i = 0; i < input.length; i++) {
            console.log(input[i].length);
            for (let j = 0; j < input[i].length; j++) {
                console.log(input[i][j]);
            }
        }
    }
    dataHandling4(input2);
    console.log("--------------------------------------------------------------");

    //Add a new key value pair to myobject

let myobject = {1:"one",11:1,"name":"arun"};
myobject["ten"] = "ten";
console.log(myobject);
console.log("--------------------------------------------------------------");

//Write out an object literal to represent the data below.

let obj={
    fname:"Guvi",
    lname:"Geek",
    Add1:6,
    Add2:"IIT-M",
    Add3:"RP",
    State:"Chennai"
}
console.log(obj);
console.log("--------------------------------------------------------------");


//How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
//Guvi, Geek, 6, IIT-M RP,Chennai.
//Amazon, Inc, 31, SP Infocity, Chennai.
//Google, Alphabet, 34 Amphitheater Parkway, MountainView.
//Tesla, Inc , 32, 333 Santana Row,San Jose.

//for doing this we can create an object just the done in the previous problem iterate over and push the complete object in array.Something like this[{},{},{}]