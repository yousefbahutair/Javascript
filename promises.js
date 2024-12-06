const isThereAreAdog = new Promise((resolve, reject) => {
    const num = Math.random();
    if( num > 10)
    {
        resolve();
    } else{
        reject()
    }
})

isThereAreAdog.then(()=> {
    console.log("yes there are")
})
isThereAreAdog.catch(()=> { console.log("there are no dog")})