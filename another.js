rps = ['r', 'p', 's']
wins = 0
losses = 0
ties = 0

for (i = 0; i < 3; i++){
    let selectionPrompt = prompt(`Pick 'r' for Rock, 'p' for Paper, or 's' for Scissors.`).toLowerCase();
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


if (wins > losses){
    alert('You won!')
}
else if (wins === losses){
    alert('You tied.')
}
else {
    alert('You lost.')
}


alert(`
    Wins: ${wins} time(s)!
    Losses: ${losses} time(s).
    Ties: ${ties} time(s).
`)

