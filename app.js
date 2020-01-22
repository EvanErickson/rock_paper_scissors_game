let rps = ['r', 'p', 's']
let userCounter = 0;
let compCounter = 0;
let tieCounter = 0;

for (let i = 0; i < 10; i++){
    let selectionPrompt = prompt("Select rock (r), paper (p), or scissors (s):")
    let compChoice = rps[Math.floor(Math.random() * rps.length)];
    if(selectionPrompt === 'r' && compChoice === 'r'){
        tieCounter++;
        alert(`Computer chose ${compChoice}, You have tied: ${tieCounter} time(s)`);
    }
    else if(selectionPrompt === 'r' && compChoice === 'p'){
        compCounter++;
        alert(`Computer chose ${compChoice}, You have lost: ${compCounter} time(s)`);
    }
    else if(selectionPrompt === 'r' && compChoice === 's'){
        userCounter++;
        alert(`Computer chose ${compChoice}, You have won: ${userCounter} time(s)`);
    }
    else if(selectionPrompt === 'p' && compChoice === 'p'){
        tieCounter++;
        alert(`Computer chose ${compChoice}, You have tied: ${tieCounter} time(s)`);
    }
    else if(selectionPrompt === 'p' && compChoice === 's'){
        compCounter++;
        alert(`Computer chose ${compChoice}, You have lost: ${compCounter} time(s)`);
    }
    else if(selectionPrompt === 'p' && compChoice === 'r'){
        userCounter++;
        alert(`Computer chose ${compChoice}, You have won: ${userCounter} time(s)`);
    }
    else if(selectionPrompt === 's' && compChoice === 's'){
        tieCounter++;
        alert(`Computer chose ${compChoice}, You have tied: ${tieCounter} time(s)`);
    }
    else if(selectionPrompt === 's' && compChoice === 'p'){
        userCounter++;
        alert(`Computer chose ${compChoice}, You have won: ${userCounter} time(s)`);
    }
    else if(selectionPrompt === 's' && compChoice === 'r'){
        compCounter++;
        alert(`Computer chose ${compChoice}, You have lost: ${compCounter} time(s)`);
    }
}

alert(
    `
    You won: ${userCounter}
    You lost: ${compCounter}
    You tied: ${tieCounter}
    `
);