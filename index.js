const fields = 76;
let bingo = [
    1,
    2
]
function displayNumberFields() {
    let numberNode = document.getElementById("bingo");
    for (let number = 1; number <= fields; number++) {
        let numberSquare = document.createElement('div')
        numberSquare.innerText = number
        numberSquare.classList.add(number)
        numberSquare.addEventListener("click", selectNumber)
        numberNode.appendChild(numberSquare)
    }
}
function selectNumber(event) {
    let clickedNumberNode = event.target
    let previouslySelectedNumber = document.querySelector('.selected-number')
    clickedNumberNode.classList.add('selected-number')
}

var randomNumberObject = Math.floor(Math.random() * 76);

function randNumberScript() {
    document.getElementById("theNumber").innerHTML = randomNumberObject;
}
function onLoad() {
    displayNumberFields()
}
window.onload = onLoad;