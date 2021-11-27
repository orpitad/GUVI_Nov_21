// Request to server using API

//1. Create request object
var request = new XMLHttpRequest();

//2. Open my request connection
//request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');


// 3. Send request
request.send();

request.onload = function() {
    console.log(this.response);
    var data =  JSON.parse(this.response);
    for(var i = 0;i< data.length; i++) {
        console.log(data[i].id);
    }
}