async function fetchQuotes(url){
    const response = await fetch(url)
    const quotes = await response.json()
    return quotes
}

export { fetchQuotes }