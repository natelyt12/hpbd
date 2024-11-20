// Popup
let sitePopup = document.getElementsByClassName('site-popup')[0]
let popupClBtn = document.getElementById('close-btn')

popupClBtn.addEventListener('click', () => {
    sitePopup.classList.remove('activated')
})

// Your code here
loadcir = document.getElementById('loadcir')
nav = document.querySelector('.navbar').classList
logo = document.querySelector('.logo')

loadtime = Math.random() * 3000
setTimeout(() => {
    loadcir.style.opacity = '0'
    loadcir.style.height = '0px'
    nav.add('done')
    logo.style.scale = '0.3'
    logo.style.margin = '0'
}, loadtime);