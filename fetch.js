fetch('https://swapi.deeev/api/planets/')
.then((res) => {
    if(!res.ok){
        throw new Error(`Something went wrong ${res.status}`)
    } else{
    console.log('Request Sent!')
    res.json().then((data) => { 
        for(let planet of data.results){
            console.log(planet.name)
        }
    })
}})
.catch((err) => {console.log(err.status)
    console.log("ERROR!!!")
})