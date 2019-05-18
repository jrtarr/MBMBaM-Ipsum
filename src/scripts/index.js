const form = document.getElementById('template-form')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const pCount = e.target.elements.count.value
    const nsfw = e.target.elements.nsfw.checked
    if (pCount <= 0){
        alert('Please enter a valid amount of paragraphs to generate!')
        e.target.elements.count.value = ''
    } else{
        window.location.replace(`paragraph.html#${pCount}&${nsfw}`)
    }
})