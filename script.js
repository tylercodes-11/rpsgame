const selectionButtons = document.querySelector('[data-selection]')

selectionButtons.forEach(selectionButtons =>{
    selectionButton.addEventListener('click', e=> {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSeletion(selection) {
    console.log(selection)
};