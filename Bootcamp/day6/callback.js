function calc (a,arr){
    switch(a){
    case 1:
        add(arr);
        break;
    case 2:
        sub(arr);
        break;
    case 3:
        mul(arr);
        break;
}
}

function add(arr){
    console.log(arr.reduce((sum,i)=>sum+i));
}
function sub(arr){
    console.log(arr.reduce((diff,i)=>diff-i));
}
function mul(arr){
    console.log(arr.reduce((mul,i)=>mul*i));
}

calc(3,[1,2,3]);