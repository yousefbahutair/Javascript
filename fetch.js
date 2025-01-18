fetch('https://swapi.dev/api/planets/')
.then((res) => {
    console.log('Request Sent!')
    res.json().then((data) => { 
        for(let planet of data.results){
            console.log(planet.name)
        }
    })
})
.catch((err) => {console.log(err.status)
    console.log("ERROR!!!")
})