//Anonymous

let rotate =function (arr,k){
let tempArr = [];

for(let i=0;i<arr.length;i++){
    tempArr.splice((i+k)%arr.length,0,arr[i]);
}
console.log(tempArr);
}
rotate([1,2,3,4,5],2);

//IIFE
( function (arr,k){
    let tempArr = [];
    
    for(let i=0;i<arr.length;i++){
        tempArr.splice((i+k)%arr.length,0,arr[i]);
    }
    console.log(tempArr);
    })([1,2,3,4,5],2);
