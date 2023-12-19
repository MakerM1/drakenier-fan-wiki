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
import { drakengard3 } from "./character-data.js"
import { nier1 } from "./character-data.js"
import { nier2 } from "./character-data.js"
import { nier3 } from "./character-data.js"

const gameOptions = document.querySelectorAll('.game-option')

const charactersTab = document.querySelector('.characters')

let  drakengard1Html = ``;
let drakengard2Html = ``;
let drakengard3Html = ``;
let nier1Html = ``;
let nier2html = ``;
let nier3html = ``

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

drakengard3.forEach((character) => {
    drakengard3Html += `
    <div class="character">
    <img
    src="${character.imgSrcDraken3}"
    alt="${character.draken3Alt}"
    />
    <p>${character.draken3Name}</p>
</div>`
})

nier1.forEach((character) => {
    nier1Html += `
    <div class="character">
    <img
    src="${character.nier1ImgSrc}"
    alt="${character.nier1Alt}"
    />
    <p>${character.nier1Name}</p>
</div>`
})

nier2.forEach((character) => {
    nier2html += `
    <div class="character">
    <img
    src="${character.nier2ImgSrc}"
    alt="${character.nier2Alt}"
    />
    <p>${character.nier2Name}</p>
</div>`
})

nier3.forEach((character) => {
    nier3html += `
    <div class="character">
    <img
    src="${character.nier3ImgSrc}"
    alt="${character.nier3Alt}"
    />
    <p>${character.nier3Name}</p>
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
        } else if (gameOptions[1].classList.contains('active') ) {
            charactersTab.innerHTML = drakengard2Html
        } else if (gameOptions[2].classList.contains('active')) {
            charactersTab.innerHTML = drakengard3Html
        }
        else if (gameOptions[3].classList.contains('active')) {
            charactersTab.innerHTML = nier1Html
        }
        else if (gameOptions[4].classList.contains('active')) {
            charactersTab.innerHTML = nier2html
        }
        else if (gameOptions[5].classList.contains('active')) {
            charactersTab.innerHTML = nier3html
        }
    })
})

gameSelect.onchange = () => {
    if (gameSelect.value === 'Drakengard') {
        charactersTab.innerHTML = drakengard1Html
    } else if (gameSelect.value === 'Drakengard2') {
        charactersTab.innerHTML = drakengard2Html
    }
    else if (gameSelect.value === 'Drakengard3') {
        charactersTab.innerHTML = drakengard3Html
    }
    else if (gameSelect.value === 'nier1') {
        charactersTab.innerHTML = nier1Html
    }
    else if (gameSelect.value === 'nier2') {
        charactersTab.innerHTML = nier2html
    }
    else if (gameSelect.value === 'nier3') {
        charactersTab.innerHTML = nier3html
    }

}