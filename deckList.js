const myDeck = { // change it to a fuction later because u want to enter the arr yourself
    deck : [],
    drwanCards :[],
    suites : ['h','d','g'],
    values : '2,3,4,5,6,7,8,9,10',
    initializeDick() {
    const {suites , values} = this
     for (let value of values ){
        for (let suite of suites){
            deck.push({
                suites, values
            })
        }
     }
    },
    drawCard() {
        const card = this.deck.pop()
        this.drwanCards.push(card)
        return card;
    },
    drawMultiple(numCards){
        const cards = []
        for(let i = 0; i < numCards; i++){
            cards.push(this.drawCard)
        }
        return cards;
    }
}