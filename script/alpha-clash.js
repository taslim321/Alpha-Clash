function play(){
    openPlay('home','play_ground')
    continueGame()

}

function openPlay(first,second)
{
    const homePage = document.getElementsByClassName(first)
    homePage[0].classList.add('hidden')
    const playPage = document.getElementsByClassName(second)
    playPage[0].classList.remove('hidden')
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
    bg.classList.add('bg-orange-500',"text-black")
}

document.addEventListener('keyup',pressKey)

function pressKey(event){
    return event.key
}