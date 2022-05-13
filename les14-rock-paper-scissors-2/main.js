// VERSION THREE
// Play a match until x

function rockPaperScissorsThree(bestOf) {
    let playAgain = true;

    while (playAgain) {
        let userScore = 0;
        let aiScore = 0;

        while (
            userScore <= bestOf / 2 &&
            aiScore <= bestOf / 2 &&
            userScore + aiScore < bestOf
        ) {
            let tie = true;
            let userChoice;
            let userChoiceNum;
            let aiChoice;

            while (tie) {
                userChoice = prompt('Pick rock, paper or scissors.');
                aiChoice = Math.floor(Math.random() * 3) + 1;

                while (
                    userChoice === null ||
                    (userChoice.toLowerCase() !== 'rock' &&
                        userChoice.toLowerCase() !== 'paper' &&
                        userChoice.toLowerCase() !== 'scissors')
                ) {
                    userChoice = prompt(
                        'Invalid input, pick rock, paper or scissors',
                    );
                }

                switch (userChoice.toLowerCase()) {
                    case 'rock':
                        userChoiceNum = 1;
                        break;
                    case 'paper':
                        userChoiceNum = 2;
                        break;
                    case 'scissors':
                        userChoiceNum = 3;
                }

                tie = userChoiceNum === aiChoice;

                if (tie) {
                    alert('Tie, play again.');
                }
            }

            if (
                (userChoiceNum === 1 && aiChoice === 3) ||
                (userChoiceNum === 2 && aiChoice === 1) ||
                (userChoiceNum === 3 && aiChoice === 2)
            ) {
                userScore++;
            } else {
                aiScore++;
            }

            alert(`AI: ${aiScore} | User: ${userScore}`);
        }

        if (userScore === aiScore) {
            playAgain = confirm(`It's a tie, want to play again?`);
        } else if (userScore > aiScore) {
            playAgain = confirm('You won, want to play again?');
        } else {
            playAgain = confirm('You lost, wnat to play again?');
        }
    }
}

// let bestOf = askForBestOf();

// rockPaperScissorsThree(bestOf);

let $rockBtn = document.getElementById('rock-btn');
let $paperBtn = document.getElementById('paper-btn');
let $scissorsBtn = document.getElementById('scissors-btn');
let $message = document.getElementById('message');

const RPS = ['rock', 'paper', 'scissors'];

function playRockPaperScissors(userChoice) {
    console.log(userChoice);
    let aiChoice = Math.floor(Math.random() * 3);

    if (aiChoice === userChoice) {
        $message.innerText = `It's a tie`;
    } else if (
        (userChoice === 0 && aiChoice === 2) ||
        (userChoice === 1 && aiChoice === 0) ||
        (userChoice === 2 && aiChoice === 1)
    ) {
        $message.innerText = `You won, the AI chose ${RPS[aiChoice]}`;
    } else {
        $message.innerText = `You lost, the AI chose ${RPS[aiChoice]}`;
    }
}

function rockBtnClicked() {
    console.log('rock');
    playRockPaperScissors(0);
}

function paperBtnClicked() {
    console.log('paper');
    playRockPaperScissors(1);
}

function scissorsBtnClicked() {
    console.log('scissors');
    playRockPaperScissors(2);
}

$rockBtn.addEventListener('click', rockBtnClicked);
$paperBtn.addEventListener('click', paperBtnClicked);
$scissorsBtn.addEventListener('click', scissorsBtnClicked);
