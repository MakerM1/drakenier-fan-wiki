const hambugerMenu = document.querySelector('.hamburger-menu')
const header = document.querySelector('.main-header')
const navList = document.querySelector('.main-list')

hambugerMenu.addEventListener('click', () => {
    hambugerMenu.classList.toggle('active')
    header.classList.toggle('active')
    navList.classList.toggle('active')
})