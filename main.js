let boxOne = document.querySelector("#one")
let boxTwo = document.querySelector("#two")
let boxThree = document.querySelector("#three")

let boxFour = document.querySelector("#four")
let boxFive = document.querySelector("#five")
let boxSix = document.querySelector("#six")

let boxSeven = document.querySelector("#seven")
let boxEight = document.querySelector("#eight")
let boxNine = document.querySelector("#nine")

const buttons = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine]

const defaultCounter = 0
let counter = defaultCounter

// boxOne.addEventListener("click", asd)
// boxTwo.addEventListener("click", asd)
console.log(buttons.length);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (counter%2 == 0) {
            buttons[i].style.clipPath = "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)";
            buttons[i].style.fontSize = "0"
            counter++
        } else {
            buttons[i].style.clipPath = "url(#doughnut-path)"
            buttons[i].style.position = "relative"
            buttons[i].style.left = "1.1rem"
            buttons[i].style.top = "1rem"
            counter++
        }
    }); 
}