function isPangram(sentence) {
    let lowerSentence = sentence.toLowerCase()
    let sentenceN = lowerSentence.trim()
    for(let char of 'abzefghijklmnopqrstvuwxyz'
    )
    {   
        if(!sentenceN.includes(char))
        {
            return false
        }     
    }
    return true;

}
