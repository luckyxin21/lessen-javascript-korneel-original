// event.target.matches('.done-btn);
// event.target.closest('.box);
let $todoList = document.getElementById('todo-list');
let $todoCount = document.getElementById('todo-count');
let $doneList = document.getElementById('done-list');
let $doneCount = document.getElementById('done-count');
let $textArea = document.getElementById('todo-input');
let $saveBtn = document.getElementById('save-btn');
let $clearAllBtn = document.getElementById('clear-all-btn');

/****************
  DRAW FUNCTIONS
 ****************/

function drawTodoCount() {
    $todoCount.innerText = $todoList.children.length;
}

function drawDoneCount() {
    $doneCount.innerText = $doneList.children.length;
}

function drawEmptyTodoList() {
    $todoList.innerHTML = '';
    drawTodoCount();
}

function drawEmptyDoneList() {
    $doneList.innerHTML = '';
    drawDoneCount();
}

function drawNewTodo(text) {
    let html = `
    <div class="box">
        <p>
            ${text}
        </p>
        <button class="done-btn fas fa-check-circle fa-2x"></button>
    </div>
    `;

    $todoList.insertAdjacentHTML('beforeend', html);
    drawTodoCount();
}

function drawNewDone(text) {
    let html = `
    <div class="box">
        <p>
            ${text};
        </p>
        <button
            class="remove-btn fas fa-times-circle fa-2x"
        ></button>
    </div>
    `;

    $doneList.insertAdjacentHTML('beforeend', html);
    drawDoneCount();
}

function drawEmptyTextArea() {
    $textArea.value = '';
}

function removeTodoItem($box) {
    $box.remove();
    drawTodoCount();
}

function removeDoneItem($box) {
    $box.remove();
    drawDoneCount();
}

/***************
  FUNCTIONALITY
 ***************/

function saveBtnClicked() {
    let text = $textArea.value;
    drawNewTodo(text);
    drawEmptyTextArea();
}

function clearAllBtnClicked() {
    drawEmptyTodoList();
    drawEmptyDoneList();
}

function setTodoDone($curDoneBtn) {
    let $box = $curDoneBtn.closest('.box');
    let text = $curDoneBtn.previousElementSibling.innerText;

    removeTodoItem($box);
    drawNewDone(text);
}

function activateBox($box) {
    if ($box.classList.contains('active')) {
        return;
    }

    let $curActiveBox = $todoList.querySelector('.box.active');

    if ($curActiveBox) {
        $curActiveBox.classList.remove('active');
    }

    $box.classList.add('active');
}

/****************
  EVENT HANDLERS
 ****************/

function init() {
    drawEmptyTodoList();
    drawEmptyDoneList();
    drawEmptyTextArea();
}

function todoListClicked(event) {
    if (event.target.matches('.done-btn')) {
        setTodoDone(event.target);
    }

    if (event.target.matches('.box') || event.target.matches('.box p')) {
        let $box = event.target.closest('.box');
        activateBox($box);
    }
}

function doneListClicked(event) {
    if (event.target.matches('.remove-btn')) {
        let $box = event.target.closest('.box');
        removeDoneItem($box);
    }
}

/*******
   RUN
 *******/

$saveBtn.addEventListener('click', saveBtnClicked);
$clearAllBtn.addEventListener('click', clearAllBtnClicked);
$todoList.addEventListener('click', todoListClicked);
$doneList.addEventListener('click', doneListClicked);

init();
