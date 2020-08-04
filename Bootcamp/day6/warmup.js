// 1. Write a function called “addFive”. Given a number, 
//    “addFive” returns 5 added to that number.
 addFive = n=>  n+5;
 
 console.log(addFive(2));
 console.log('===================================');

 // 2. Write a function called “getOpposite”.
//  Given a number, return its opposite
 getOpposite =n=> -n;

 console.log(getOpposite(3));
 console.log('===================================');

 // 3. Fill in your code that takes an number minutes and converts it to seconds.
 toSeconds = min=> min*60;
 console.log(toSeconds(3));
 console.log('===================================');

 // 4. Create a function that takes a string and returns it as an integer.

 toInt = str=> +str;

 console.log(toInt('3'));
 console.log('===================================');

 // 5. Create a function that takes a number as an argument, 
 // increments the number by +1 and returns the result.

 inc = num=> num+1;

 console.log(inc(3));
 console.log('===================================');

 // 6. Create a function that takes an array and returns the first element.

 arrArg = arr => arr[0];
 console.log(arrArg([3,1,2]));
 console.log('===================================');

 // 7. Convert Hours into Seconds
//     Write a function that converts hours into seconds.

hToS =h => h*3600;
console.log(hToS(2));
 console.log('===================================');

 // 8. Find the Perimeter of a Rectangle
//    Create a function that takes height and width and finds the perimeter of a rectangle.

peri =(h,w)=> 2*(h+w);
console.log(peri(2,1));
 console.log('===================================');

 // 9. Given two numbers, 
 //   return true if the sum of both numbers is less than 100. Otherwise return false.

 tf =(a,b)=> a+b<100;

 console.log(tf(200,1));
 console.log('===================================');

 // 10. There is a single operator in JavaScript, 
 // capable of providing the remainder of a division operation. 
 //Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

 remainder =(a,b)=> a%b;

 console.log(remainder(3,4));
 console.log('===================================');

 // 11. Count legs 
 //MacDonald is asking you to tell him how many legs can be counted among all his animals.

 countLegs=(a,b,c)=>2*a+4*b+4*c;
 console.log(countLegs(2,3,5));
 console.log('===================================');

 // 12. Frames Per Second
//  Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

fps = (a,b)=> 60*a*b;
console.log(fps(10,25));
console.log('===================================');

// 13. Check if an Integer is Divisible By Five

divBy5 =n=> n%5===0;
console.log(divBy5(-10));
console.log('===================================');

// 14. Write a function called “isEven”.
isEven =n=>n%2===0?true: typeof n == 'number'?false:"-1";
console.log(isEven(10));
console.log('===================================');

// 15. Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

bothOdd =(a,b)=>((a!==0 && a%2!==0) && (b!==0)&& b%2!==0 );

console.log(bothOdd(0,5));
console.log('===================================');

// 15. Write a function called “getFullName”.

getFullName = (fname,lname)=> (fname+' '+lname).trim();

console.log(getFullName('',""));
console.log('===================================');

// 16. Write a function called “getLengthOfWord”.
getLengthOfWord =word=> typeof word === String?word.length:"-1";

console.log(getLengthOfWord());
console.log('===================================');

// 17. Write a function called “isSameLength”.

isSameLength =(s1,s2)=>s1.length ===s2.length;

console.log(isSameLength('',""));
console.log('===================================');

// 18. Create a function to calculate the 
//   distance between two points defined by their x, y coordinates

getDistance =(x1,y1,x2,y2)=> Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

console.log(getDistance(100,100,300,400));
console.log('===================================');

// 19. Write a function called “getNthElement”.
//Given an array and an integer, “getNthElement” returns the element 
//at the given integer, within the given array. If the array has a length of 0,
//it should return ‘undefined’.

getNthElement=(arr,i)=> arr.length>0?arr[i]:'undefined';
console.log(getNthElement([], 1));
console.log('===================================');

// 20. Write a function called “getLastElement”.

getLastElement = (arr)=> arr.length>0?arr[arr.length-1]:"-1";
console.log(getLastElement([1,2,3]));
console.log('===================================');

// 21. Write a function called “getProperty”.
//Given an object and a key, “getProperty” returns the value of the property at the given key.

getProperty = (obj,key)=> obj[key]?obj[key]:"undefined";
console.log(getProperty({'mykey':'value'},'mykty'));
console.log('===================================');


// 22. Write a function called “addProperty”.
//Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
let obj={}
addProperty =(obj,key)=> obj[key]=true;
addProperty(obj, 'mykey');
console.log(obj);
console.log('===================================');

//remove property...

