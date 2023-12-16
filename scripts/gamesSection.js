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

mainContainer.onscroll = () => {
    if (mainContainer.scrollLeft >= (mainContainer.scrollWidth / 4)) {
        arrowMove(arrowRight, arrowLeft, 0, 1)
        seriesName.innerHTML = 'Nier'
    } else {
        arrowMove(arrowLeft, arrowRight, 1, 0)
        seriesName.innerHTML = 'Drakengard'
    }
}

arrowRight.addEventListener('click', () => {
    arrowMove(arrowRight, arrowLeft, 0, 1)
    mainContainer.scrollLeft = mainContainer.scrollWidth
})

arrowLeft.addEventListener('click', () => {
    arrowMove(arrowLeft, arrowRight, 1, 0)
    mainContainer.scrollLeft = 0

})

// characters section

const gameOptions = document.querySelectorAll('.game-option')

gameOptions.forEach((game) => {
    game.addEventListener('click', () => {
        for (let i = 0; i < gameOptions.length; i++) {
            if (gameOptions[i].classList.contains('active')) {
                gameOptions[i].classList.remove('active')
            }

            if (!gameOptions[i].classList.contains('active')) {
                game.classList.add('active')
            }
        }
    })
})