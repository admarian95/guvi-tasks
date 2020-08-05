//Anonymous 

let uppercase = function (str){
    console.log(str.toUpperCase());
}
uppercase("abc");

//IIFE 

(function (str){
    console.log(str.toUpperCase());
})("abc");