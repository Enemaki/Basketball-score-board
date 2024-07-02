let scoreHome = document.getElementById("scorehome")
let scoreGuest = document.getElementById("scoreguest")
let resultHome = 0
let resultGuest = 0

function addHome1() {
    resultHome += 1
    scoreHome.textContent = resultHome
}

function addHome2() {
    resultHome += 2
    scoreHome.textContent = resultHome
}

function addHome3() {
    resultHome += 3
    scoreHome.textContent = resultHome
}

function addGuest1() {
    resultGuest += 1
    scoreGuest.textContent = resultGuest
}

function addGuest2() {
    resultGuest += 2
    scoreGuest.textContent = resultGuest
}

function addGuest3() {
    resultGuest += 3
    scoreGuest.textContent = resultGuest
}

function reset() {
    resultHome = 0
    resultGuest = 0
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
}