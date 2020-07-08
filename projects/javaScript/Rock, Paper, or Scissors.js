const getUserChoice =(userInput) => {
    userInpur =userInput.toLowerCase();
    if(userInput==='rock' || userInput==='paper'|| userInput==="scissors" || userInput==='bomb'){
        return userInput
    } 
    else{
        console.log('Error');
    }
}
function getComputerChoice() {
     
     
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      }
  }
function determineWinner(getUserChoice,getComputerChoice){
    if (getUserChoice===getComputerChoice) {
        return 'Game was a tie';
    }
    if(getUserChoice==='rock'){
        if(getComputerChoice==='paper'){
            return 'Computer won';
        }
        else if(getComputerChoice==="scissors"){
            return 'User Won';
        }
        else{
            return 'user won';
        }
    }
    if(getUserChoice==='paper'){
        if(getComputerChoice==='scissors'){
            return 'Computer Won';
        }
        else if(getComputerChoice==='rock'){
            return 'user won'
        }
        else{
            return 'user Won';
        }
    }
    if(getUserChoice==='scissors'){
        if(getComputerChoice==='paper'){
            return 'User Won';
        }
        if(getComputerChoice==='rock'){
            return 'Computer Won';
        }
        else{
            return 'computer won';
        }
    if(getUserChoice==='bomb'){
        return 'user win';
    }
       
    }
}
function playGame(){
    const userChoice=getUserChoice('rock');
    const computerChoice=getComputerChoice();
    console.log('users choice '+userChoice);
    console.log('computerChoice '+computerChoice);
    console.log( determineWinner());
}
playGame();
