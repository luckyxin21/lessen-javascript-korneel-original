let $inputNumbers = document.getElementById('input-numbers');
let $inputOperations = document.getElementById('input-operations');
let $inputOperationsTop = document.getElementById('input-operations-top');
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
    $displayBottom.innerText = parseFloat(displayBottom);
}

function drawDisplayTop() {
    if (displayTop === '') {
        $displayTop.innerText = '';
        return;
    }

    $displayTop.innerText = parseFloat(displayTop) + ' ' + operation;
}

function clear() {
    displayTop = '';
    displayBottom = '';
    operation = '';

    drawDisplayTop();
    drawDisplayBottom();
}

function calculate() {
    if (
        displayTop.length === 0 ||
        displayBottom.length === 0 ||
        operation.length === 0
    ) {
        return;
    }

    let topFloat = parseFloat(displayTop);
    let bottomFloat = parseFloat(displayBottom);
    let result;

    switch (operation) {
        case '+':
            result = topFloat + bottomFloat;
            break;
        case '-':
            result = topFloat - bottomFloat;
            break;
        case '*':
            result = topFloat * bottomFloat;
            break;
        case '/':
            result = topFloat / bottomFloat;
            break;
        case 'ⁿ':
            result = Math.pow(topFloat, bottomFloat);
            break;
        case '√':
            result = Math.pow(topFloat, 1 / bottomFloat);
            break;
    }

    displayTop = result.toString();
    displayBottom = '';
    operation = '';

    drawDisplayBottom();
    drawDisplayTop();
}

function selectOperation(curOperation) {
    if (displayTop.length === 0) {
        displayTop = displayBottom;
        displayBottom = '';
        operation = curOperation;
    } else if (displayBottom.length === 0) {
        operation = curOperation;
    } else {
        calculate();
        operation = curOperation;
    }

    drawDisplayBottom();
    drawDisplayTop();
}

function clickInputNumbers(event) {
    if (event.target.matches('.inputs__btn')) {
        let curNumber = event.target.innerText;

        displayBottom += curNumber;
        drawDisplayBottom();
        
        if (displayTop.length > 0 && operation.length === 0) {
            displayTop = '';
            drawDisplayTop();
        }
    }
}

function clickOperations(event) {
    if (event.target.matches('.inputs__btn')) {
        if (displayTop.length === 0 && displayBottom.length === 0) {
            return;
        }

        let curOperation = event.target.innerText;

        if (curOperation === '=') {
            calculate();
            return;
        }
        if (curOperation === 'C') {
            clear();
            return;
        }

        selectOperation(curOperation);
    }
}

$inputNumbers.addEventListener('click', clickInputNumbers);
$inputOperations.addEventListener('click', clickOperations);
$inputOperationsTop.addEventListener('click', clickOperations);
