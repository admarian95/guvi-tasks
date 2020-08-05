// Anonymous 

let isPalindrome = function (arr){
let flag=true;
    for(let i=0;i<=Math.floor((arr.length/2));i++){
        if(arr[i] !== arr[arr.length-1-i]){
            flag=false;
        }

    }
    (flag?console.log("palindrome"):console.log("not palindrome"));
}
isPalindrome('sahas');

// IIFE

(function (arr){
    let flag=true;
        for(let i=0;i<=Math.floor((arr.length/2));i++){
            if(arr[i] !== arr[arr.length-1-i]){
                flag=false;
            }
    
        }
        (flag?console.log("palindrome"):console.log("not palindrome"));
    })(("sahas"));