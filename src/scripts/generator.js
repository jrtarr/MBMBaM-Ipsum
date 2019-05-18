class QuoteList{
    constructor(quotes,length){
        this.quotes = []
        quotes.forEach(quote => this.quotes.push(quote))
        this.length = length
    }
    getQuote(){
        const index = Math.floor((Math.random()*this.length))
        const word = this.quotes[index]
        return word
    }
}

const fetchQuotes = async (url) => {
    const response = await fetch(url)
    if (response.status === 200){
        const data = await response.json()
        return data.quotes
    }else{
        throw new Error('Error retrieving quotes')
    }
}

function buildParagraph(quoteArray){
    let wordCount = Math.floor((Math.random()*50)+100)
    let paragraph = ''
    let sentenceWordCount = Math.floor((Math.random()*12)+5)
    console.log(sentenceWordCount)
    while(wordCount > 0){
        const quote = quoteArray.getQuote()
        const quoteWordCount = quote.split(' ').length
        if (sentenceWordCount - quoteWordCount > 0){
            paragraph = paragraph + quote + " "
            sentenceWordCount -= quoteWordCount
        }else {
            paragraph = paragraph + ". " + quote
            sentenceWordCount = Math.floor((Math.random()*14))+6
        }
        wordCount -= quoteWordCount
    }
    return paragraph
}

export { fetchQuotes,QuoteList,buildParagraph }