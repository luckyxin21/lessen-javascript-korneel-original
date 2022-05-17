let $guessInput = document.getElementById('guess');
let $guessBtn = document.getElementById('guess-btn');
let $messageContainer = document.getElementById('message-container');
let $playAgainBtn = document.getElementById('play-again-btn');
let $guessCount = document.getElementById('guess-count');
let $guessForm = document.getElementById('guess-form');

const MinNum = 1;
const MaxNum = 10;
const MaxGuesses = 5;

let aiGuess;
let gameOver = false;
let guessCount = 0;

console.log({ $guessInput, $guessBtn });

function init() {
    aiGuess = Math.floor(Math.random() * (MaxNum + 1 - MinNum)) + MinNum;
    gameOver = false;
    guessCount = 0;

    $messageContainer.innerText = '';
    $guessInput.value = '';
    $guessBtn.disabled = false;
    $playAgainBtn.classList.add('hidden');
    $guessCount.innerText = guessCount;
}

function guessBtnClicked(event) {
    event.preventDefault();
    let curGuess = parseInt($guessInput.value);

    // if (gameOver) {
    //     return;
    // }

    if (!(curGuess >= MinNum && curGuess <= MaxNum)) {
        $guessBtn.innerText = `Invalid number, guess a number between ${MinNum} and ${MaxNum}`;
        return;
    }

    $guessBtn.innerText = `Guess`;
    guessCount++;
    $guessCount.innerText = guessCount;

    if (aiGuess === curGuess) {
        $messageContainer.innerText = 'You won';
        $playAgainBtn.classList.remove('hidden');
        $guessBtn.disabled = true;
        gameOver = true;
    } else if (curGuess < aiGuess) {
        $messageContainer.innerText = 'Too low';
    } else {
        $messageContainer.innerText = 'Too high';
    }

    if (guessCount === 5 && !gameOver) {
        $messageContainer.innerText = 'You lost';
        $playAgainBtn.classList.remove('hidden');
        $guessBtn.disabled = true;
        gameOver = true;
    }
}

// $guessBtn.addEventListener('click', guessBtnClicked);
$guessForm.addEventListener('submit', guessBtnClicked);

$playAgainBtn.addEventListener('click', init);
init();
