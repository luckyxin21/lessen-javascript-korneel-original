let $addBtn = document.getElementById('add-btn');
let $btnContainer = document.getElementById('btn-container');
let $result = document.getElementById('result');

// function btnClicked(event) {
//     console.log(event.target);
//
//     $result.innerText = event.target.innerText;
// }
//
// function addBtnClicked() {
//     let newBtn = document.createElement('button');
//     newBtn.innerText = $btnContainer.children.length + 1;
//     newBtn.addEventListener('click', btnClicked);
//
//     $btnContainer.append(newBtn);
// }
//

// $addBtn.addEventListener('click', addBtnClicked);

function btnContainerClicked(event) {
    if (event.target.matches('button')) {
        $result.innerText = event.target.innerText;
    }
}


function addBtnClicked() {
    $btnContainer.insertAdjacentHTML('beforeend', `<button>${$btnContainer.children.length + 1}</button> `)
}

$addBtn.addEventListener('click', addBtnClicked);
$btnContainer.addEventListener('click', btnContainerClicked);
