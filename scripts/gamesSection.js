const arrowRight = document.querySelector('.fa-angle-right')
const circles = document.querySelectorAll('.fa-circle')
const arrowLeft = document.querySelector('.fa-angle-left')
const nier = document.querySelector('.nier')
const drakengard = document.querySelector('.draken')
const seriesName = document.querySelector('.series-name')
const mainContainer = document.querySelector('.img-container')

function arrowMove(arrowDirectionActive, arrowDirection, number1, number2) {
    arrowDirectionActive.classList.remove('active')
    arrowDirection.classList.add('active')
    circles[number1].classList.remove('active')
    circles[number2].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    arrowMove(arrowRight, arrowLeft, 0, 1)
    nier.scrollIntoView({behavior: "smooth", block: "start"})
})

arrowLeft.addEventListener('click', () => {
    arrowMove(arrowLeft, arrowRight, 1, 0)
    drakengard.scrollIntoView({behavior: "smooth", block: "start"})

})

mainContainer.onscroll = () => {
    if (mainContainer.scrollLeft >= (mainContainer.scrollWidth / 4)) {
        arrowMove(arrowRight, arrowLeft, 0, 1)
        seriesName.innerHTML = 'Nier'
    } else {
        arrowMove(arrowLeft, arrowRight, 1, 0)
        seriesName.innerHTML = 'Drakengard'
    }
}