import { fetchQuotes,QuoteList,buildParagraph } from './generator'

const hash = location.hash.substring(1).split("&")
const pCount = hash[0]
const nsfw = hash[1]
const quoteContainer = document.getElementById('quote-container')
let quoteList = []


const main = async ()=>{
    const quotes = await fetchQuotes('./quotes.json')
    quotes.clean.forEach(quote => quoteList.push(quote))
    if (nsfw){
        quotes.dirty.forEach(quote => quoteList.push(quote))
    }
    quoteList = new QuoteList(quoteList,quoteList.length)

    for(let i = 0; i < pCount; i++){
        const paragraph = document.createElement('p')
        paragraph.textContent = buildParagraph(quoteList)
        quoteContainer.appendChild(paragraph)
    }
}

main()