const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const userMoveDisplay = document.getElementById('user-move');
const computerMoveDisplay = document.getElementById('computer-move');
const resultDisplay = document.getElementById('result');
 let yourchoice = '';
 
rockButton.addEventListener("click", () => {
    yourchoice = 'rock';
});
paperButton.addEventListener("click", () => {
    yourchoice = 'paper';
});
scissorsButton.addEventListener("click", () => {
    yourchoice = 'scissors';
});

 const apopochoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];}
     
const choicehandeler = (yourchoice,Apopochoices) => {
    let result = '';
    if(yourchoice=== Apopochoices){
        return'Draw';
    }
    else if ((yourchoice === 'rock' && Apopochoices === 'scissors') || 
             (yourchoice === 'paper' && Apopochoices === 'rock') || 
             (yourchoice === 'scissors' && Apopochoices === 'paper')) {
        return'You win!';
    } else {
        return 'apopo wins!';
    }
}
startButton.addEventListener("click",() =>{
    const Apopochoice = apopochoice();
    if (yourchoice === '') {
        resultDisplay.textContent = "Please choose rock, paper, or scissors first!";}
        else{
    const result = choicehandeler(yourchoice,Apopochoice);
    userMoveDisplay.textContent = `Your move: ${yourchoice}`;
    computerMoveDisplay.textContent = `apopo's  move: ${Apopochoice}`;
    resultDisplay.textContent = result;}
})
resetButton.addEventListener("click", () => {
    userMoveDisplay.textContent = '';
    computerMoveDisplay.textContent = '';
    resultDisplay.textContent = '';
});
