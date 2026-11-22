let paraEl = document.getElementById("para")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let count = 0 ;
let firstcard =0
let secondcard =0
let sum = []

function startgame(){
    
    let firstcard = random()
    let secondcard = random()
    sum.push(firstcard+secondcard)
    cardsEl.textContent += firstcard + " " + secondcard
  render()
    
}

function render(){
    // let (i=0,i<sum.length,i++){} //
    //     sumEl.textContent = sum[i]
    
}

function random(){
    let r = Math.floor(Math.random()*9) + 1
    return r
}

console.log(1)