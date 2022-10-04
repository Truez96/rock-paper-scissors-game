let computerChose = "";
let playerChose = "";
let playerScore = 0;
let computerScore = 0;
let winner = '';

/** Function randomly choosing between "rock" "paper" and "scissors" and returns string with it's choice*/
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let choice;
    
    switch (randomNumber){
        case 0: choice = "rock"
        break;

        case 1: choice = "paper"
        break;

        case 2: choice = "scissors"
        break;
    }
    return choice;
}


/** Function plays one round, comparing playerSelection and computerSelection as strings and returns a message with winner */
function playRound(playerSelection, computerSelection){
    
    let result = "";

    switch (playerSelection.toLowerCase()){
      
        case "rock": 
        if (computerSelection==="rock"){
            const p = document.createElement('p')
            p.innerText = "It's a tie! Let's try one more?"
            outcomeDiv.appendChild(p);
            result = "It's a tie! Let's try one more?";
           break;
        } else if (computerSelection==="paper"){
            const p = document.createElement('p')
            p.innerText= "You LOSE! Paper beats rock"
            outcomeDiv.appendChild(p);
            result = "You LOSE! Paper beats rock";
            break;
        } else if (computerSelection==="scissors"){
            const p = document.createElement('p')
            p.innerText = "You WIN! Rock beats scissors!"
            outcomeDiv.appendChild(p);
            result = "You WIN! Rock beats scissors!"
            break;
        }

        case "paper": 
        if (computerSelection==="rock"){
            const p = document.createElement('p')
            p.innerText = "You WIN! Paper beats rock";
            outcomeDiv.appendChild(p);
            result = "You WIN! Paper beats rock";
            break;
        } else if (computerSelection==="paper"){
            const p = document.createElement('p')
            p.innerText = "It's a TIE! Let's try one more?";
            outcomeDiv.appendChild(p);
            result = "It's a TIE! Let's try one more?";
            break;
        } else if (computerSelection==="scissors"){
            const p = document.createElement('p')
            p.innerText = "You LOSE! Scissors beats paper";
            outcomeDiv.appendChild(p);
            result = "You LOSE! Scissors beats paper";
            break;
        }

        case "scissors": 
        if (computerSelection==="rock"){
            const p = document.createElement('p')
            p.innerText = "You LOSE! Rock beats scissors!";
            outcomeDiv.appendChild(p);
            result = "You LOSE! Rock beats scissors!";
            break;
        } else if (computerSelection==="paper"){
            const p = document.createElement('p')
            p.innerText = "You WIN! Scissors beats paper!";
            outcomeDiv.appendChild(p);
            result = "You WIN! Scissors beats paper!";
            break;
        } else if (computerSelection==="scissors"){
            const p = document.createElement('p')
            p.innerText = "It's a TIE! Let's try one more?";
            outcomeDiv.appendChild(p);
            result = "It's a TIE! Let's try one more?";
            break
        }
    }
    return result;
    
}

const rockbutton = document.querySelector(".rock");
const paperbutton = document.querySelector('.paper');
const scissorsbutton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector(".outcome")

rockbutton.addEventListener('click', ()=> {
    playerChose = "rock";
    computerChose = getComputerChoice();
    winner = playRound(playerChose, computerChose);
    winnerResult();
})
paperbutton.addEventListener('click', ()=> {
    playerChose = "paper";
    computerChose = getComputerChoice();
    winner = playRound(playerChose, computerChose);
    winnerResult();

})
scissorsbutton.addEventListener('click', ()=> {
    playerChose = "scissors";
    computerChose = getComputerChoice();
    winner = playRound(playerChose, computerChose);
    winnerResult();

})

function winnerResult(){
    if(winner.charAt(4)==="W"){
        playerScore++;
    } else if (winner.charAt(4)==="L"){
        computerScore++;
    }
   
    const line = document.createElement('p')
    line.innerText = '_______________________________________________________'
    const text = document.createElement('h4')
    const comp = document.createElement('h4')
    text.innerText = "Our artificial intelligence chose " + computerChose.toUpperCase() + " at this round"
    outcomeDiv.appendChild(text)
    comp.innerText = `YOU - ${playerScore} : ${computerScore} - Artificial intelligence`
    outcomeDiv.appendChild(comp)
    outcomeDiv.appendChild(line)
    
   
    if(playerScore>computerScore && playerScore==5){
        const p = document.createElement('h2')
        p.innerText = `CONGRATULATIONS!!! You won our artificial intelligence with a total score ${playerScore} : ${computerScore}`
        outcomeDiv.appendChild(p);
    } else if(playerScore<computerScore && computerScore==5){
        const p = document.createElement('h2')
        p.innerText = `Well, you lost. You didn't have any chances against our technology anyway. Total score is ${playerScore} : ${computerScore}`
        outcomeDiv.appendChild(p);
    } else if(playerScore==computerScore==5) {
        const p = document.createElement('h2')
        p.innerText = `Holy cow! You're as good as artificial intelligence! Both of your scores are even somehow, and it's ${playerScore} : ${computerScore}`
        outcomeDiv.appendChild(p);
    }

}


