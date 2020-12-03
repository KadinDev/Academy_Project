const menu = document.querySelector('.toogle')
const banner = document.querySelector('.banner')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    banner.classList.toggle('active')
})