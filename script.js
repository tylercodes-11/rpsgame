const selectionButtons = document.querySelectorAll('[data-selection]');
// const scoreBoard_div = document. querySelectorAll('.result-score');
const yourScoreSpan = document.getElementById('userScore');
const computerScoreSpan = document.getElementById('botScore');

let userScore = 0;
let botScore = 0;

const SELECTIONS = [
    {
        name: 'rock' , //rock object
        emoji: '👊',
        beats: 'scissors'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper',
    },

    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => { //take in an event
        
        const selectionName = selectionButton.dataset.selection
        console.log("this is my selection:",selectionName);
        const selection = SELECTIONS.find(selection => selection.name === selectionName) //what choice selected
        makeSelection(selection)
    })
})

function randomSelection() { //random computer choice
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex];
}


function makeSelection(selection) {
    const computerSelection = randomSelection()
    console.log(computerSelection);
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    console.log(selection)
    console.log(isWinner) //

    // addSelectionResult(computerSelection, computerWinner)
    // addSelectionResult(selection, yourWinner)

    if(yourWinner) win() //incrementing your score
    if(computerWinner) loss()//incrementing computer score
    // if(!yourWinner || computerWinner) draw() 
};

function isWinner (selection, opponentSelection) { //winner function
    return (
        selection.beats === opponentSelection.name 
    )
}
// function draw (selection, opponentSelection) {
//     return selection.name === opponentSelection.name
// }



function  incrementScore(scoreSpan) { //keeping score function
    const currentScore = parseInt(scoreSpan.innerText);
    scoreSpan.innerText = currentScore + 1;
}
function win() {
    userScore++;
    incrementScore(yourScoreSpan);
console.log(userScore);

}

function loss() {
    botScore++;
    incrementScore(computerScoreSpan);
}

// console.log(win);
// function addSelectionResult(selection, winner) {
//     const div = document.createElement('div')
//     div.innerText = selection.emoji
//     div.classList.add('result-selection')
//     if (winner) div.classList.add('winner')
//     finalColumn.after(div) //updating past input after last
// }

