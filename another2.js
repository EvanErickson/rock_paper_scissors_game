let arr = ['rock', 'paper', 'scissors']
let wins = 0
let losses = 0
let ties = 0

let welcomeScreen = alert('Welcome to Rock, Paper, Scissors.')

for (i = 0; i < 3; i++){
    let rock = document.getElementById('rock')
    let paper = document.getElementById('paper')
    let scissors = document.getElementById('scissors')

        
    let selection = document.getElementById('options').addEventListener('click', rock, paper, scissors);

    if (selection === document.getElementById('rock')){
        console.log('rock')
    }

    // let compChoice = arr[Math.floor(Math.random() * arr.length)];
    // console.log(selection, compChoice)

}