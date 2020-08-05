// 1. Print odd numbers in an array 

let odd=arr=>arr.filter(a=>a%2!==0);
console.log(odd([1,2,3,4,5,6]));
console.log('==================================');

// 2. Convert all the strings to title caps in a string array

let caps =str=> str.toUpperCase();
console.log(caps('str'));
console.log('==================================');

// 3. Sum of all numbers in an array

let sum = arr=>arr.reduce((acc,i)=>acc +i);
console.log(sum([1,2,3,4]));
console.log('==================================');

// 4. Return all the prime numbers in an array
isPrime =n=>{
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i ===0){
            return false;
        }
    }
    return true;
}
let tempArr=[];
[2,3,4,10,11].forEach(a=>(isPrime(a))?tempArr.push(a):"-1");
console.log(tempArr);

// 5. Return all the palindromes in an array 

let tempArrP=[];
let palindrome =str=>{
    flag=true;
    [...str].forEach(a=>{if(a !== str[str.length-1-str.indexOf(a)])  flag=false;})
    if(flag==true){
       tempArrP.push(str);
    }
}
['abc','aa','aba'].forEach(a=>palindrome(a));
console.log(tempArrP);