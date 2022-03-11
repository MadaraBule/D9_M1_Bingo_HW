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
        // numberSquare.addEventListener("click", selectNumber)
        numberNode.appendChild(numberSquare)
    }
}

const getRandomNum = function (range) {
    const randIndex = Math.floor(Math.random() * range.length);
    const random = range.splice(randIndex, 1)[0];
    return random;
};

function selectNumber(event) {
    let clickedNumberNode = event.target
    let previouslySelectedNumber = document.querySelector('.selected-number')
    clickedNumberNode.classList.add('selected-number')
}

function randNumberScript() {
    document.getElementById("theNumber").innerHTML = randomNumberObject;
}
window.onload = function () {
    generateMainBoard();
    const randBtn = document.getElementById("randBtn");
    const range = fillArray();
    randBtn.addEventListener("click", function () {
        generateRandNumber(range);
    });
    const userBoardBtn = document.getElementById("userBoardBtn");
    userBoardBtn.onclick = generateUserBoards;
};
/*function randomClick() {
let cellsContainer = document.querySelectorAll(".cell")

let rand = random()

for (let 1 = 0; i < cellsContainer; i++)
if (rand === parseInt(cellsContainer[i].innerText)) {
cellsContainer[i].classList.add("selected')
}*/