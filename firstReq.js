const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function() {
    const data = JSON.parse(this.response);
    for(let plante of data){
        console.log( plante.name );
    }
    console.log("it worked")
})
firstReq.addEventListener("error", () => {
    console.log("Error")
})
firstReq.open('GEt', 'https://github.com/yousefbahutair/Javascript/tree/master/Basics')
firstReq.send();
console.log('sent!')