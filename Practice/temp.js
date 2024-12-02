function makeDake(){
    const deck = []
    const values = '2,3,4,5,6,7,8,9,10'
    const suites = ['h','g','r','n']
    for (let value of values.split(',')){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
    }
    return deck
}
}