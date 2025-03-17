const X_IMAGE_URL = 'https://w7.pngwing.com/pngs/749/874/png-transparent-blue-letter-x-alphabet-letters-letters-and-numbers-icon.png';
const O_IMAGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png';

let userScore = 0;
let computerScore = 0;

function updateScoreboard() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function assignSpace(space, owner) {
    if (space.children.length > 0) return;  // ป้องกันการคลิกซ้ำ

    const image = document.createElement('img');
    image.src = owner === 'x' ? X_IMAGE_URL : O_IMAGE_URL;
    space.appendChild(image);

    const index = parseInt(space.dataset.index);
    takenBoxes[index] = owner;
    const indexToRemove = freeBoxes.indexOf(space);
    freeBoxes.splice(indexToRemove, 1);
    space.removeEventListener('click', changeToX);
}

function changeToX(event) {
    assignSpace(event.currentTarget, 'x');

    if (isGameOver()) {
        displayWinner();
    } else {
        setTimeout(computerChooseO, 500);  // ดีเลย์ให้คอมพิวเตอร์ดูมีความคิด
    }
}

function computerChooseO() {
    if (freeBoxes.length === 0) return;  // ป้องกันข้อผิดพลาด
    const index = Math.floor(Math.random() * freeBoxes.length);
    assignSpace(freeBoxes[index], 'o');

    if (isGameOver()) {
        displayWinner();
    }
}

function isGameOver(){
    return freeBoxes.length === 0 || getWinner() !== null;
}

function displayWinner() {
    const winner = getWinner();
    const resultContainer = document.querySelector('#results');
    resultContainer.innerHTML = ''; // เคลียร์ผลลัพธ์ก่อนแสดงใหม่

    const header = document.createElement('h1');
    if (winner === 'x') {
        header.textContent = 'You win!';
        userScore++;
    } else if (winner === 'o') {
        header.textContent = 'Computer wins';
        computerScore++;
    } else {
        header.textContent = 'Tie';
    }
    resultContainer.appendChild(header);
    updateScoreboard(); // อัปเดตคะแนน

    // ลบ event listener ทั้งหมด
    for (const box of freeBoxes) {
        box.removeEventListener('click', changeToX);
    }
}

function checkBoxes(one, two, three) {
    if (takenBoxes[one] !== undefined &&
        takenBoxes[one] === takenBoxes[two] &&
        takenBoxes[two] === takenBoxes[three]) {
        return takenBoxes[one];
    }
    return null;
}

function getWinner() {
    for (let col = 0; col < 3; col++) {
        const offset = col * 3;
        let result = checkBoxes(offset, 1 + offset, 2 + offset) ||
            checkBoxes(col, 3 + col, 6 + col);
        if (result) return result;
    }
    return checkBoxes(0, 4, 8) || checkBoxes(2, 4, 6);
}

function resetGame() {
    takenBoxes = {};
    freeBoxes.length = 0;

    document.querySelectorAll('#grid div').forEach(box => {
        box.innerHTML = '';
        box.addEventListener('click', changeToX);
        freeBoxes.push(box);
    });

    document.querySelector('#results').innerHTML = '';
}

const freeBoxes = [];
let takenBoxes = {};

document.querySelectorAll('#grid div').forEach(box => {
    box.addEventListener('click', changeToX);
    freeBoxes.push(box);
});

document.getElementById('reset').addEventListener('click', resetGame);
updateScoreboard();  // แสดงคะแนนเริ่มต้น
