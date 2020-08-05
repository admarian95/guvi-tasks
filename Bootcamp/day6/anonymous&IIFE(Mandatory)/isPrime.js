// anonymous

let retPrime = function (arr){
    let tempArray=[];
    for(let i=0;i<arr.length;i++){
        let flag=true;
    for(let j=2;j<=Math.sqrt(arr[i]);j++)
    {
        if(arr[i]%j ===0) flag=false;
    }
    if(flag) tempArray.push(arr[i]);
}
console.log(tempArray);
}

retPrime([5,6,7,89]);

//IIFE

(function (arr){
    let tempArray=[];
    for(let i=0;i<arr.length;i++){
        let flag=true;
    for(let j=2;j<=Math.sqrt(arr[i]);j++)
    {
        if(arr[i]%j ===0) flag=false;
    }
    if(flag) tempArray.push(arr[i]);
}
console.log(tempArray);
})(([5,6,7,4,89]));