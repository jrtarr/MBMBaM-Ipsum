import { fetchQuotes,QuoteList,buildParagraph } from './generator'

let clean
let dirty

const main = async ()=>{
    const quotes = await fetchQuotes('./quotes.json')

    clean = new QuoteList(quotes.clean,quotes.clean.length)
    dirty = new QuoteList(quotes.dirty,quotes.dirty.length)

    document.getElementById('quote').textContent = buildParagraph(clean)
}

main()