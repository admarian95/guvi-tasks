//1. Write a code to print the numbers in the array

/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i--) {              // for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string); */

////////////////////////////////////////////////////////////////////////////////////

//2. Write a code to print the numbers in the array
/* var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i++) {              //for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] + , 
}
console.log(new_string); */                 //console.log(new_string.slice(0,-1));

////////////////////////////////////////////////////////////////////////////////////

//3. Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
/*var new_string = “”;
 
for (var i = 11; i > 0; i — ) {             //for (var i = 10; i >= 0; i-- ) {
 new_string += numsArr[i] + “ “ 
}
console.log(new_string); */                 //console.log(new_string.trim())

////////////////////////////////////////////////////////////////////////////////////

//4. Write a code to replace the array value — 
//If the number is even, replace it with ‘even’.

/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd                           // numsArr[i] = 'even'
 }
}
console.log(numsArr); */

////////////////////////////////////////////////////////////////////////////////////

//5. Write a code to replace the array value — If the index is even, replace it with ‘even’.

/* var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )                //if(i%2 == 0)
 {
 numsArr[i] = even                      //'even'
 }
}
console.log(numsArr); */

////////////////////////////////////////////////////////////////////////////////////

//6.Write a code to add all the numbers in the array
/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 var sum;                           //define var sum=0 above the for loop
 sum += numsArr[i]
}
console.log(sum); */

////////////////////////////////////////////////////////////////////////////////////

//7. Write a code to add the even numbers only
/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {              // i<11
 if(numsArr[i]%2==0);                   //remove semicolon
 sum += numsArr[i]
}
console.log(sum); */

////////////////////////////////////////////////////////////////////////////////////

//8. Write a code to add the even numbers and subract the odd numbers

/*var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0);                   // if(numsArr[i]%2==0)  
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum); */

////////////////////////////////////////////////////////////////////////////////////

//9. Write a code to print inner arrays
/*var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];         // var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]]; 
for (var i = 0; i < numsArr.length; i++); {                     // for (var i = 0; i < numsArr.length; i++) {  
 console.log( numsArr[i])
} */

////////////////////////////////////////////////////////////////////////////////////

//10. Write a code to print elements in the inner arrays
/*var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;                                              // var str_all='';
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )               //j++
     str_all +=inner_array[j]
}
console.log(str_all); */

////////////////////////////////////////////////////////////////////////////////////

//11. Write a code to replace the array value — If the index is even, replace it with ‘even’.
/*var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = even
       }
}
console.log(numsArr); */

/* correct code::
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
      if(j %2 == 0 )
      {
        inner_array[j] = "even"
       }
}
console.log(numsArr); */

////////////////////////////////////////////////////////////////////////////////////

//12. Write a code to print elements in the inner arrays in reverse
/*
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length; j < 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all); */
//correct code ::
/*var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all='';
for (var i = numsArr.length-1; i >=0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )
     str_all +=inner_array[j]+" "
}
console.log(str_all); */

////////////////////////////////////////////////////////////////////////////////////

//13. Write a code to add elements in the inner arrays based on odd or even
/* var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even); */

//corrected code ::
/*var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j]
 }
 else if(inner_array[j]%2==0)
 {
 sum_even += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even); */

////////////////////////////////////////////////////////////////////////////////////