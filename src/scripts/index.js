const form = document.getElementById('template-form')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const pCount = e.target.elements.count.value
    const nsfw = e.target.elements.nsfw.checked
    window.location.replace(`paragraph.html#${pCount}&${nsfw}`)
})