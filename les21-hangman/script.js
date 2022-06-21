const randomWords = [
    'condition',
    'bottom',
    'lineage',
    'trip',
    'reporter',
    'paper',
    'colorful',
    'agent',
    'justify',
    'torture',
    'cap',
    'earthflax',
    'payment',
    'research',
    'picture',
    'garage',
    'honor',
    'memorial',
    'planet',
    'biography',
    'profound',
    'rumor',
    'gear',
    'bedroom',
    'orthodox',
    'penalty',
    'grief',
    'promote',
    'roof',
    'suite',
    'moving',
    'killer',
    'museum',
    'essay',
    'fever',
    'dignity',
    'shadow',
    'enjoy',
    'kill',
    'shy',
    'counter',
    'pawn',
    'button',
    'bullet',
    'skin',
    'rate',
    'shop',
    'consider',
    'other',
    'prospect',
];

let $letterContainer = document.getElementById('letter-container');
let $image = document.getElementById('image');
let $solutionContainer = document.getElementById('solution-container');
let $winLoseContainer = document.getElementById('win-lose-container');

/*********
   STATE
 *********/
const MaxMisses = 9;

let state = {
    gameOver: false,
    selectedWord: [],
    lettersFound: [],
    lettersFoundCount: 0,
    misses: 1,
};

/****************
  DRAW FUNCTIONS
 ****************/

function removeLetterClasses() {
    let $letters = $letterContainer.children;

    for (let i = 0; i < $letters.length; i++) {
        $letters[i].classList.remove('success', 'failed');
    }
}

function drawImage() {
    $image.src = `images/hangman0${state.misses}.png`;
}

function drawLettersFound() {
    let html = '';
    for (let i = 0; i < state.lettersFound.length; i++) {
        html += `<div class="solution-letter">${state.lettersFound[i]}</div>`;
    }

    $solutionContainer.innerHTML = html;
}

function drawMessage(message) {
    $winLoseContainer.innerText = message;
}

function drawLetterClass($letter, className) {
    $letter.classList.add(className);
}

/***************
 FUNCTIONALITY
 ***************/

function selectRandomWord() {
    let randomIndex = Math.floor(Math.random() * randomWords.length);

    let randomWord = randomWords.splice(randomIndex, 1)[0];
    return randomWord.toUpperCase().split('');
}

function initLettersFound() {
    let lettersFound = [];

    for (let i = 0; i < state.selectedWord.length; i++) {
        lettersFound.push('');
    }

    return lettersFound;
}

function updateLettersFound(letter) {
    let letterFound = false;

    for (let i = 0; i < state.lettersFound.length; i++) {
        if (state.selectedWord[i] === letter) {
            state.lettersFound[i] = letter;
            state.lettersFoundCount++;
            letterFound = true;
        }
    }

    return letterFound;
}

/****************
  EVENT HANDLERS
 ****************/

function init() {
    state.gameOver = false;
    state.selectedWord = selectRandomWord();
    state.lettersFound = initLettersFound();
    state.lettersFoundCount = 0;
    state.misses = 1;

    removeLetterClasses();
    drawLettersFound();
    drawImage();
    drawMessage('');
}

function letterContainerClicked(event) {
    if (event.target.matches('.letter')) {
        if (state.gameOver) {
            return;
        }

        if (
            event.target.classList.contains('success') ||
            event.target.classList.contains('failed')
        ) {
            return;
        }

        let letter = event.target.innerText;
        let letterFound = updateLettersFound(letter);

        if (letterFound) {
            drawLettersFound();
            drawLetterClass(event.target, 'success');
        } else {
            state.misses++;
            drawLetterClass(event.target, 'failed');
            drawImage();
        }

        if (state.lettersFoundCount === state.selectedWord.length) {
            state.gameOver = true;
            drawMessage('You won! Play again?');
        }

        if (state.misses === MaxMisses) {
            state.gameOver = true;
            drawMessage(
                `You lost! The word was ${state.selectedWord.join(
                    '',
                )}. Play again?`,
            );
        }
    }
}

/*******
 RUN
 *******/
$letterContainer.addEventListener('click', letterContainerClicked);
$winLoseContainer.addEventListener('click', init);
init();
