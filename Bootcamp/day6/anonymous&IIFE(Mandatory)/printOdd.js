//Anonymous

let  printOdd = function(n){
    (n%2 !== 0)?console.log("odd"):console.log("even");
}
printOdd(24);

//IIFE 
(function (n){
    (n%2 !== 0)?console.log("odd"):console.log("even");
})(24);