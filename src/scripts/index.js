import { fetchQuotes } from './generator'

//Random Number Generator based on array length
const randomNum = (length) => Math.floor((Math.random()*length)+1)

let dirty;

dirty = fetchQuotes('./quotes.json').then((response)=> dirty = await response.quotes.dirty)

// console.log(quotes.clean)

// const clean = {
//     quotes: quotes.clean,
//     length: quotes.clean.length,
//     getWord(){
//         const index = randomNum(this.length)
//         const word = this.quotes[index]
//         console.log(word)
//         return word
//     }
// }
// const dirty = {
//     quotes: quotes.dirty,
//     length: quotes.dirty.length,
//     getWord(){
//         const index = randomNum(this.length)
//         const word = this.quotes[index]
//         console.log(word)
//         return word
//     }
// }

// console.log(clean)
// console.log(dirty)



// response.quotes.clean.forEach((quote)=>{clean.quotes.push(quote)})
// clean.length = clean.quotes.length
// response.quotes.dirty.forEach((quote)=>{dirty.quotes.push(quote)})
// dirty.length = dirty.quotes.length