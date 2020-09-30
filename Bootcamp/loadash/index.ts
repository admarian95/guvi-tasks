console.log('------------------------------------------------------')
console.log('------------------------------------------------------')
console.log("chunk:")
var chunk =(arr:Array<number>,no:number)=>{
    var arr1=[];
    var arr2=[];
    for(let i=0;i<no;i++){
        arr1[i]=arr[i];
    }
    for(let j=no;j<arr.length;j++){
        arr2[j-no]=arr[j];
    }
    return [arr1,arr2];
}

console.log(chunk([1,2,3,4],3));
console.log('------------------------------------------------------')
console.log('------------------------------------------------------')
console.log("sum:")
var sum =(arr:Array<number>)=>{
    let s=0;
    for(let i=0;i<arr.length;i++){
        s+= arr[i];
    }
    return s;
}

console.log(sum([1,2,3,4]));
console.log('------------------------------------------------------')
console.log('------------------------------------------------------')
console.log("filter:")
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 20, 'active': false },
    { 'user': 'fred',   'age': 45, 'active': true },
    { 'user': 'fred',   'age': 19, 'active': false },
    { 'user': 'fred',   'age': 19, 'active': true }
  ];
var filter=(arr:Array<object>,  f:Function )=>{
    
for(let i in arr){
  if(f(arr[i])){
    console.log(arr[i]);
  }
}
}
filter(users,(e:any)=> {return e.age>20 });

console.log('------------------------------------------------------')
console.log('------------------------------------------------------')
console.log("find:")
var find =(arr:Array<object>, f:Function) =>{
let foundVal =[];
let j=0;
  for(let i in arr){
    if(f(arr[i])){
      foundVal[j]=arr[i];
      j++;
    }
  }
  if(foundVal.length === 0){
    console.log("not found");
  }else{
    console.log("filtered obj     =>   " );
    for(let i in foundVal){
      console.log(foundVal[i]);
    }
  }
}

find(users,(e:any)=> {return e.age === 19 || e.active === true});

console.log('------------------------------------------------------')
console.log('------------------------------------------------------')
console.log("reduce:")
var reduce = (arr:Array<number>, f:Function , initVal :number) =>{
let initSum = initVal ;
let array = arr;

for(let i=0;i<array.length;i++){
  initSum = f(initSum,arr[i]);
}
return initSum;
}

let ans = reduce([1, 2], (sum : number, n :number)=> {
  return sum + n;
}, 0);

console.log(ans);