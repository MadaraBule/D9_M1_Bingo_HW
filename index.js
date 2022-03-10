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
    if (previouslySelectedNumber !== null) {
        previouslySelectedNumber.classList.remove('selected-number')
    }
    clickedDayNode.classList.add('selected-number')
}

function onLoad() {
    displayNumberFields()
}
window.onload = onLoad;