// Popup
let sitePopup = document.getElementsByClassName('site-popup')[0]
let popupClBtn = document.getElementById('close-btn')

popupClBtn.addEventListener('click', () => {
    sitePopup.classList.remove('activated')
})

// Your code here
