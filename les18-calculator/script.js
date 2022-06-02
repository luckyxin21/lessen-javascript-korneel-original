let $inputNumbers = document.getElementById('input-numbers');
let $inputOperations = document.getElementById('input-operations');
let $displayBottom = document.getElementById('display-bottom');
let $displayTop = document.getElementById('display-top');

console.log($inputNumbers);

let displayBottom = '';
let displayTop = '';
let operation = '';

function drawDisplayBottom() {
    if (displayBottom === '') {
        $displayBottom.innerText = '';
        return;
    }
    $displayBottom.innerText = parseInt(displayBottom);
}

function drawDisplayTop() {
    $displayTop.innerText = parseInt(displayTop) + ' ' + operation;
}

function clickInputNumbers(event) {
    if (event.target.matches('.inputs__btn')) {
        let curNumber = event.target.innerText;

        displayBottom += curNumber;
        drawDisplayBottom();
    }
}

function clickOperations(event) {
    if (event.target.matches('.inputs__btn')) {
        let curOperation = event.target.innerText;

        if (displayTop.length === 0) {
            displayTop = displayBottom;
            displayBottom = '';
        }


        operation = curOperation;
        drawDisplayBottom();
        drawDisplayTop();
    }
}

$inputNumbers.addEventListener('click', clickInputNumbers);
$inputOperations.addEventListener('click', clickOperations);
