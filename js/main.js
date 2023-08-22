let humbarger = document.querySelector (`.humbarger`)
let navLinks = document.querySelector (`.nav-links`)

humbarger.addEventListener (`click`, ()=>{
    navLinks.classList.toggle (`active`)
    humbarger.classList.toggle (`active`)
})

