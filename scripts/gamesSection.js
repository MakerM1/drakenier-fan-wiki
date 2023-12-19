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

import { charactersDraken1 } from "./character-data.js"
import { chaaractersDraken2 } from "./character-data.js"

const gameOptions = document.querySelectorAll('.game-option')

const charactersTab = document.querySelector('.characters')

let  drakengard1Html = ``;
let drakengard2Html = ``;

charactersDraken1.forEach((character) => {
    drakengard1Html += `
    <div class="character">
    <img
    src="${character.imgSrcDraken1}"
    alt="${character.draken1Alt}"
    />
    <p>${character.draken1Name}</p>
</div>`
})

chaaractersDraken2.forEach((character) => {
    drakengard2Html += `
    <div class="character">
    <img
    src="${character.imgSrcDraken2}"
    alt="${character.draken2Alt}"
    />
    <p>${character.draken2Name}</p>
</div>`
})

charactersTab.innerHTML = drakengard1Html

const gameSelect = document.getElementById('game-option')

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

        if (gameOptions[0].classList.contains('active')) {
            charactersTab.innerHTML = drakengard1Html
        } else if (gameOptions[1].classList.contains('active') || gameSelect.value === 'Drakengard2') {
            charactersTab.innerHTML = drakengard2Html
        }
    })
})

gameSelect.addEventListener('click', () => {
    if (gameSelect.value === 'Drakengard') {
        charactersTab.innerHTML = drakengard1Html
    } else if (gameSelect.value === 'Drakengard2') {
        charactersTab.innerHTML = drakengard2Html
    }
})