// Anonymous
let remD =function(arr){
    let tempArr=[];
    console.log([... new Set(arr)]);
}
remD([1,2,3,4,5,4,6]);

//IIFE

(function(arr){
    let tempArr=[];
    console.log([... new Set(arr)]);
})([1,2,3,4,5,4,6]);