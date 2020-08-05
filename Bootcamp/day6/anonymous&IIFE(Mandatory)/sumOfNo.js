// anonymous 

let sum =function (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    console.log(sum);
}
sum([1,2,3]);

//IIFE

(function (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    console.log(sum);
})([1,2,3]);