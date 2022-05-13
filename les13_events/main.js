function executeMath(numOne, numTwo, math) {
    return math(numOne, numTwo);
}

function sum(numOne, numTwo) {
    return numOne + numTwo;
}

function product(numOne, numTwo) {
    return numOne * numTwo;
}

console.log(executeMath(3, 3, sum));
console.log(executeMath(3, 4, product));

let $btn = document.getElementById('btn');

function btnClicked(event) {
    console.log(event);
}

$btn.addEventListener('click', btnClicked);

let $text = document.getElementById('text');

function textInput(event) {
    console.log(event);
    console.log(event.target.value);
}

$text.addEventListener('input', textInput);

let $drawing = document.getElementById('drawing');
let mouseDown = false;

function drawingClick(event) {
    console.log(event);

    if (mouseDown) {
        event.target.insertAdjacentHTML(
            'beforeend',
            `<div class="dot" style="top:${event.offsetY}px; left:${event.offsetX}px;"></div>`,
        );
    }
}

function drawingDown() {
    mouseDown = true;
}

function drawingUp() {
    mouseDown = false;
}

$drawing.addEventListener('mousedown', drawingDown);
$drawing.addEventListener('mouseup', drawingUp);
$drawing.addEventListener('mousemove', drawingClick);
