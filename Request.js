const request = new XMLHttpRequest();
request.addEventListener('load', function() {
    console.log('IT WORKED!!');
    const data = JSON.parse(this.responseText);
    for(let planet of data.results){
        console.log(planet.name);
    }
});
request.addEventListener('error',()=> {
    console.log('ERROR');
});
request.open('GET','https://swapi.dev/api/planets/')
request.send();
console.log('Request Sent!');