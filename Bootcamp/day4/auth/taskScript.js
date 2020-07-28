var request = new XMLHttpRequest()
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=cc5280d8ff487e8ed1d1c93a06658a46';

// Open a new connection, using the GET request on the URL endpoint

//Added a proxy server as ORIGIN was null in header and was creating the issue.
request.open('GET',url_string ) ;
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
console.log(data);
}