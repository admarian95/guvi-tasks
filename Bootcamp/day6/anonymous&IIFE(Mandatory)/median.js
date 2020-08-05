//Anonymous

let median = function (arr1,arr2){
    let tempArray=[];
    while(arr1.length && arr2.length){
        if(arr1[0]<=arr2[0]){
            tempArray.push(arr1.shift());
        }
        else if(arr1[0]>arr2[0]){
            tempArray.push(arr2.shift());
        }
    }
        while(arr1.length)
        tempArray.push(arr1.shift()) 
        while(arr2.length)
        tempArray.push(arr2.shift()) 
    
    console.log(tempArray.length%2!==0?(tempArray[Math.floor(tempArray.length/2)]):((tempArray[Math.floor(tempArray.length/2)])+tempArray[Math.floor(tempArray.length/2)])/2);
}

median([1,2,3],[2,4,5,6]);

// IIFE 
(function (arr1,arr2){
    let tempArray=[];
    while(arr1.length && arr2.length){
        if(arr1[0]<=arr2[0]){
            tempArray.push(arr1.shift());
        }
        else if(arr1[0]>arr2[0]){
            tempArray.push(arr2.shift());
        }
    }
        while(arr1.length)
        tempArray.push(arr1.shift()) 
        while(arr2.length)
        tempArray.push(arr2.shift()) 
    
        console.log(tempArray.length%2!==0?(tempArray[Math.floor(tempArray.length/2)]):((tempArray[Math.floor(tempArray.length/2)])+tempArray[Math.floor(tempArray.length/2)])/2);
})([1,2,3],[2,3,4,5,6]);