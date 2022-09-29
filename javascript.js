let computerChose = "";
let playerScore = 0;
let computerScore = 0;


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
           result = "It's a tie! Let's try one more?"
           break;
        } else if (computerSelection==="paper"){
            result = "You LOSE! Paper beats rock"
            break;
        } else if (computerSelection==="scissors"){
            result = "You WIN! Rock beats scissors!"
            break;
        }

        case "paper": 
        if (computerSelection==="rock"){
            result = "You WIN! Paper beats rock";
            break;
        } else if (computerSelection==="paper"){
            result = "It's a TIE! Let's try one more?";
            break;
        } else if (computerSelection==="scissors"){
            result = "You LOSE! Scissors beats paper";
            break;
        }

        case "scissors": 
        if (computerSelection==="rock"){
            result = "You LOSE! Rock beats scissors!";
            break;
        } else if (computerSelection==="paper"){
            result = "You WIN! Scissors beats paper!";
            break;
        } else if (computerSelection==="scissors"){
            result = "It's a TIE! Let's try one more?";
            break
        }
    }
    return result;
    
}



function game(){



    for(let i = 0; i < 5; i++){
        
        computerChose = getComputerChoice()

        let winner = playRound(prompt("Enter your choice for this round: Rock, Paper or Scissors?"), computerChose)
        console.log("Our artificial intelligence chose " + computerChose.toUpperCase())

        console.log(winner);
    
        if(winner.charAt(4)==="W"){
            playerScore++;
        } else if (winner.charAt(4)==="L"){
            computerScore++;
        }

        if(playerScore==computerScore){
            console.log(`For this round yours and artificial intelligence scores are even`)
        }

        console.log(`YOU - ${playerScore} : ${computerScore} - AI`)
    
        console.log("________________________________________________")
        
    }

    if(playerScore>computerScore){
        console.log(`CONGRATULATIONS!!! You won our artificial intelligence with a total score ${playerScore} : ${computerScore}`)
    } else if(playerScore<computerScore){
        console.log(`Well, you lost. You didn't have any chances against our technology anyway. Total score is ${playerScore} : ${computerScore}`)
    } else {
        console.log(`Holy cow! You're as good as artificial intelligence! Both of your scores are even somehow, and it's ${playerScore} : ${computerScore}`)
    }

}

game();