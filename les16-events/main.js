// Drag and drop

let $start = document.getElementById('start');
let $drop = document.getElementById('drop');
let $dragger = document.getElementById('dragger');

let draggedEl = null;

$dragger.addEventListener('dragstart', function (event) {
    // console.log(event);
    draggedEl = event.target;
});

$drop.addEventListener('dragenter', function (event) {
    event.preventDefault();
    // console.log(event);
});

$drop.addEventListener('dragover', function (event) {
    event.preventDefault();
    // console.log(event);
});

$drop.addEventListener('drop', function (event) {
    console.log(event);
    event.target.append(draggedEl);
});

// Blur and focus

$inputOne = document.getElementById('input-one');
$inputTwo = document.getElementById('input-two');
$inputThree = document.getElementById('input-three');
$inputFour = document.getElementById('input-four');

$inputOne.addEventListener('focus', function (event) {
    console.log(event);
});

$inputOne.addEventListener('blur', function (event) {
    console.log(event);
});

// Reset and submit

let $testForm = document.getElementById('test-form');
let $resetBtn = document.getElementById('reset-btn');

$resetBtn.addEventListener('click', function (e) {
    $testForm.reset();
});

$testForm.addEventListener('reset', function (e) {
    console.log('reset');
});

// change

let $testSelect = document.getElementById('test-select');

$inputThree.addEventListener('change', function (e) {
    console.log(e.target.value);
});

$testSelect.addEventListener('change', function (e) {
    console.log(e.target.value);
});

// keydown, keypress, keyup

$inputFour.addEventListener('keydown', function (event) {
    event.preventDefault();
    console.log('keydown');
    console.log(event);
    event.target.value += 'a';
});

$inputFour.addEventListener('keypress', function (event) {
    console.log('keypress');
    console.log(event);
});

$inputFour.addEventListener('keyup', function (event) {
    console.log('keyup');
    console.log(event);
});

// domcontentloaded

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('ready');
});

// load

let $testImg = document.getElementById('test-img');

$testImg.addEventListener('load', function () {
    console.log('image ready');
});

// mouseenter and mouseleave

$start.addEventListener('mouseenter', function (e) {
    e.target.style.borderColor = 'green';
});
$start.addEventListener('mouseleave', function (e) {
    e.target.style.borderColor = 'gold';
});
