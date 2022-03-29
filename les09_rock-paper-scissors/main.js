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

function askForBestOf() {
    let bestOf = parseInt(prompt('Play until x?'));
    
    while (Number.isNaN(bestOf) || bestOf <= 1) {
        bestOf = parseInt(prompt('Insert a number higher than 0. Play until x?'));
    } 
    
    return bestOf;
}

let bestOf = askForBestOf();

rockPaperScissorsThree(bestOf);


