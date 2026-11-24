let paraEl = document.getElementById("para")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let count = 0 ;
let firstcard = random()
let secondcard = random()
let sum = 0;
let cards = []
let isalive = false
let hasjackpot = false

function startgame(){
    
   isalive = true
    render()
    
}

function render(){
    cardsEl.textContent += firstcard + " " + secondcard 
  
    
}

function random(){
    let r = Math.floor(Math.random()*9) + 1
    return r
}

