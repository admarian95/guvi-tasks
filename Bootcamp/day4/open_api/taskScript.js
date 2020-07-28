var request = new XMLHttpRequest()
var url_string = 'https://dog.ceo/api/breeds/list/all';

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
