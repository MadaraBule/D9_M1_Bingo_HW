const fields = 76;
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

function onLoad() {
    displayNumberFields()
}
window.onload = onLoad;