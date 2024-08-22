// Popup
let sitePopup = document.getElementsByClassName('site-popup')[0]
let popupClBtn = document.getElementById('close-btn')

popupClBtn.addEventListener('click', () => {
    sitePopup.classList.remove('activated')
})

// Your code here
let form = document.getElementById('form')
let form1 = document.getElementById('a')

form.addEventListener('submit', () => {
    event.preventDefault()
    let location = document.getElementById('location')
    let sLocation = document.getElementById('submit-location')
    savedAnim(location, sLocation)
})

a.addEventListener('submit', () => {
    event.preventDefault()
    let tab = document.getElementById('tab')
    let stab = document.getElementById('submit-tab')
    savedAnim(tab, stab)
})

function savedAnim(ev, btn) {
    ev.style.setProperty('--wid', '100%')
    btn.setAttribute('disabled', '')
    setTimeout(() => {
        ev.style.setProperty('--l', '1')
        ev.style.setProperty('--wid', '0%')
        ev.style.setProperty('--r', 'unset')
    }, 300);
    setTimeout(() => {
        ev.style.setProperty('--l', '0')
        ev.style.setProperty('--wid', '0%')
        ev.style.setProperty('--r', 'unset')
        btn.removeAttribute('disabled')
    }, 600);
}