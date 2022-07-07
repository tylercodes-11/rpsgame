const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document. querySelector('[data-final-column]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const computerScoreSpan = document.querySelector('[data-computer-score')
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
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if(yourWinner) incrementScore(yourScoreSpan) //incrementing your score
    if(computerWinner) incrementScore(computerScoreSpan) //incrementing computer score
};

function  incrementScore(scoreSpan) { //keeping score function
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div) //updating past input after last
}

function isWinner (selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() { //random computer choice
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex];
}