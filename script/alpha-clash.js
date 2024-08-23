function play(){
    openPlay('home','play_ground')
    continueGame()
    setLifeAndScore()

}

function openPlay(first,second)
{
    const homePage = document.getElementsByClassName(first)
    homePage[0].classList.add('hidden')
    const playPage = document.getElementsByClassName(second)
    playPage[0].classList.remove('hidden')
}

function setLifeAndScore()
{
    const lifeElement = document.getElementById('life-number')
    lifeElement.innerText = 10
    const scoreElement = document.getElementById('score-number')
    scoreElement.innerText = 0

}
function continueGame(){
    const randomA = randomAlphabet().toUpperCase()
    pushInDisplay(randomA)
    setBackgroundKey(randomA)
    
}
 
function randomAlphabet(){
    const alphabet ="abcdefghijklmnopqrstuvwxyz"
    const randomNumber = Math.round(Math.random()*25)
    const randomAlpha = alphabet[randomNumber]
    return randomAlpha
}

function pushInDisplay(randomA){
    const alphabetShow = document.getElementById('current-alphabet')
    alphabetShow.innerText = randomA
}

function setBackgroundKey(randomA){
    const bg = document.getElementById(randomA.toLowerCase())
    bg.classList.add('bg-orange-500',"text-black")
}
function removeBackgroundKey(randomA){
    const bg = document.getElementById(randomA.toLowerCase())
    bg.classList.remove('bg-orange-500',"text-black")
}

document.addEventListener('keyup',pressKey)

function pressKey(event){
    const playerPressed =  event.key
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase()

    if(playerPressed === currentAlphabet)
    {
        removeBackgroundKey(currentAlphabet)
        scoreChange()
        continueGame()

    }else
    {
        lifeChange(currentAlphabet)
    }
}

function scoreChange()
{
    const scoreElement = document.getElementById('score-number')
    const score = scoreElement.innerText 
    scoreElement.innerText = 1 + parseInt(score) 
    return scoreElement.innerText
}

function lifeChange(currentAlphabet)
{
    const lifeElement = document.getElementById('life-number')
    const life = lifeElement.innerText
    lifeElement.innerText = parseInt(life)-1
    const lifeRemaining = lifeElement.innerText
    if(lifeRemaining<=0)
    {
        openPlay('play_ground','score-container')
        const scoreShowElements = document.getElementById('Score-final')
        scoreShowElements.innerText = scoreChange()
        removeBackgroundKey(currentAlphabet)
        const scoreElement = document.getElementById('score-number')
        scoreElement.classList.remove('score-number')
    }
}