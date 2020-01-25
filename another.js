rps = ['r', 'p', 's']
wins = 0
losses = 0
ties = 0

for (i = 0; i < 3; i++){
    let selectionPrompt = prompt(`Pick 'r' for Rock, 'p' for Paper, or 's' for Scissors.`)
    let compChoice = rps[Math.floor(Math.random() * rps.length)];

    if (selectionPrompt === 'r' && compChoice === 'r' || selectionPrompt === 's' && compChoice === 's' || selectionPrompt === 'p' && compChoice === 'p'){
        ties++
        alert(`Computer picked ${compChoice}, You have tied ${ties} time(s)`)
    }
    
    if (selectionPrompt === 'r' && compChoice === 's' || selectionPrompt === 'p' && compChoice === 'r' || selectionPrompt === 's' && compChoice === 'p'){
        wins++
        alert(`Computer picked ${compChoice}, You have won ${wins} time(s)`)
    }

    if (selectionPrompt === 'r' && compChoice === 'p' || selectionPrompt === 'p' && compChoice === 's' || selectionPrompt === 's' && compChoice === 'r'){
        losses++
        alert(`Computer picked ${compChoice}, You have lost ${losses} time(s)`)
    }
}








// conditional logic on who won the Game, if you won more than them
alert(`
    You won ${wins} time(s)!
    You lost ${losses} time(s).
    You tied ${ties} time(s).
`)

