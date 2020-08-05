var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';

// Open a new connection, using the GET request on the URL endpoint

//Added a proxy server as ORIGIN was null in header and was creating the issue.
request.open('GET',url_string ) ;
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
let data = JSON.parse(this.response);
let dummy =JSON.parse(this.response);
// 1.Get the countries in asia
let asianCountries =data.filter(a=>a.region === 'Asia');
console.log(asianCountries);

// 2. Get the countries with population less than 2L

let loPop =data.filter(a=>a.population < 200000);
console.log(loPop);
 
// 3. Bumpup the current population  of all the counteirs by 1L
dummy.forEach(a=> a.population += 100000);
console.log(dummy);

// 4. convert all the names in capital
dummy.forEach(a=> a.name = a.name.toUpperCase());
console.log(dummy);

// 5. print follwoig details  name , capital , flag 
let details =dummy.map(a=>  [a.name,a.capital,a.flag]);
console.log(details);

// 6. Print the total population of the countries
let sum = data.map((arr)=> (arr.population)).reduce((sum,arr)=> sum+arr);
console.log(sum);

// 7. Print the total population of the countries in asia

let asianPopSum =data.filter(a=>a.region === 'Asia').map(a=> a.population).reduce((sum,arr)=>sum+arr);
console.log(asianPopSum);
}
