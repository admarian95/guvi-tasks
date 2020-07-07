//Square of a number
let n1=2;
console.log(Math.pow(n1,2));

//Swapping 2 numbers
let temp1;
let x=12;
let y=4;
temp1=y;
y=x;
x=temp1;
console.log("x="+x+"  "+"y="+y);

//Addition of 3 numbers
let a=1,b=2,c=3;
console.log(a+b+c);

//Celsius to Fahrenheit conversion
let celcius = 23;
console.log("Farheinheit:  "+((9/5)*celcius+32));

//Meter to miles
let metres = 2.1;
console.log("miles=  "+metres*0.000621);

//Pounds to kg
let Pounds=2;
console.log("kg=   "+Pounds/2.205);

//Calculate Batting Average
let b1=25,b2=59;
console.log("average=   "+(b1+b2)/2);

//Calculate five test scores and print their average
let t1=2,t2=210,t3=78,t4=79,t5=80;
console.log("test average=   "+(t1+t2+t3+t4+t5)/5);

//Power of any number x ^ y.
let x1 =2,y1=4;
console.log(Math.pow(x1,y1)); 

//Calculate Simple Interest
let P=1200,R=10,T=2;
console.log((P*R*T)/100);

// Calculate area of an equilateral triangle

let side = 5;
console.log((1.732050/4)*Math.pow(side,2));

// Area Of Isosceles Triangle
let a1 = 10;
let a2 = 4;
console.log("area =    "+a2/2*(Math.pow((a1**2-(a2**2)/4),0.5)));

// Volume Of Sphere

let r = 2;
console.log("volume =    "+(4/3)*Math.PI*Math.pow(r,3));

//Volume Of Prism
l=9,h=12,b=2;
console.log("volume =    "+(l*b*h));

// Find area of a triangle

let base=12,height=10;
console.log(0.5*base*height);

// Give the Actual cost and Sold cost, Calculate Discount Of Product
let ac =50,sc=40;
console.log("discount=   "+(ac-sc));

//Given their radius of a circle and find its diameter, circumference and area.
let radius=2;
console.log("diameter=  "+2*r);
console.log("circumference=  "+2*Math.PI*r);
console.log("area=  "+Math.PI*Math.pow(r,2));

// Given two numbers and perform all arithmetic operations
let num1=2,num2=6;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1**num2);
console.log(num1%num2);

// Calculate electricity bill
P=100;
console.log("amount=   "+parseFloat(P/1000)*30*10);

//Program To Calculate CGPA
let percentage =75;
let grade = 75*9.5;
if(60<grade<=70){
    console.log("CGPA=   B2");
}else if(70<grade<=80){
    console.log("CGPA=   B1");
}else if(80<grade<=90){
    console.log("CGPA=   A2");
}else if(90<grade<=100){
    console.log("CGPA=   A1");
}