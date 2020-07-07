//1.
/*Find the culprit
fix.html
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);   //error in this line should be alert( "I’m JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html> */

////////////////////////////////////////////////////////////////////////////////////

//2. Find the culprit and invoke the alert
/*
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>    //<script src='script.js'></script>
</body>
</html>
scripts.js
alert(“I’m invoked!”); */            //alert(" I'm invoked!");

////////////////////////////////////////////////////////////////////////////////////

//3. Explain the below how it works
/*explain.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon    //ES6 advancements , no need for appending semicolon;
alert(`Wor     // this is a multi line string so no issues observed.
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working */      

////////////////////////////////////////////////////////////////////////////////////

//4. Fix the below to alert Guvi geek 

/* fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let admin=9, fname=10.5; 
fname = "Guvi";                 //fname="Guvi "
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek" */

///////////////////////////////////////////////////////////////////////////////////

//5. Fix the below to alert hello Guvi geek

/* fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let fname=10.5; 
fname = "Guvi";                 //fname = "Guvi "
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' ); */   //alert( `hello ${name} ` ); */

///////////////////////////////////////////////////////////////////////////////////

//6.Fix the below to alert sum of two numbers

/*
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b); */                        //alert(+a + +b);

///////////////////////////////////////////////////////////////////////////////////

//7.If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

/*fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>          //code is blasted beccause this is string comparison and it gives true,
</body>                                     //incase of number comparison it will give false.
</html>
script.js
var a = "2" > "12";                     //var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}*/

///////////////////////////////////////////////////////////////////////////////////

//8. How to get the success in console.
/*fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("Enter a number?");          
//Don't modify any code below this                  //a=null;
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );          
}*/

///////////////////////////////////////////////////////////////////////////////////

//9. How to get the correct score in console.
/*fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let value = prompt('How many runs you scored in this ball');
if (value === 4) {                      //+value ===4
      console.log("You hit a Four");
} else if (value === 6) {                   //+value ===6
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}*/

///////////////////////////////////////////////////////////////////////////////////

//10. Fix the code to welcome the Employee
/* fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let login = 'Employee';
let message = (login == 'Employee') ? :         //let message = (login == 'Employee') ? 'Welcome Employee':
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message); */

///////////////////////////////////////////////////////////////////////////////////

//11. Fix the code to welcome the boss
/*fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";                  //remove let keyword
}
else
{
 let message = "Go away";
}
  console.log(message); */
 
///////////////////////////////////////////////////////////////////////////////////

//12. Fix the code to welcome the boss
/*fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;                       //initialise lock=0
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message); */

////////////////////////////////////////////////////////////////////////////////////

//13. Fix the code to welcome the boss
/*fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;                   //intialize lock=0
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message); */

////////////////////////////////////////////////////////////////////////////////////

//15. Change the code to print
//      3
//      2
//      1

/* fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i );               // console.log(i--);
} */

////////////////////////////////////////////////////////////////////////////////////

//16. Change the code to print 1 to 10 in 4 lines
/* fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js                   
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1                                //code change:
console.log(num) */             /*let num=1;
                                for(let i=0;i<10;i++){
                                console.log(num+i);
                                }*/

////////////////////////////////////////////////////////////////////////////////////

//17. Change the code to print even numbers
/* fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {                    //num+=2;
  console.log(num)
} */

////////////////////////////////////////////////////////////////////////////////////

//18. Change the code to print all the gifts
/*fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!');   // console.log(`Wrapped ${'gifts[i]'} and added a bow!`);
}*/

////////////////////////////////////////////////////////////////////////////////////

//19. Fix the code to disarm the bomb.
/* fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let countdown = 100;
while (countdown > 0) {             // us an 'if' statement maybe
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
} */

////////////////////////////////////////////////////////////////////////////////////

//20. Whats the msg printed and why?

/* var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg); */

//The message printed would be 'hi' because on checking the string in if condition it returns true whereas for integer zero , it treats it as bool false .