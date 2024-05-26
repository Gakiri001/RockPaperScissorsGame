const rock = document.getElementById('rock')
const paper = document.getElementById("paper")
const scissors = document.getElementById('scissors')
const output = document.getElementById('output')
const Playerchill = document.getElementById('Playerchill')
const compchill = document.getElementById('compchill')
const compResults = document.getElementById('compResults')
const playerResults = document.getElementById('playerResults')


//instructions or procedures
//1. Select the computer choice using Math.random()
//2. compare the computer choice and the player choice
//3. display the results and add the game tally

let computerMove = '';
let results = '';

function computerSelection(){
  const randomNumber = Math.floor(Math.random()*10)
  console.log(randomNumber)
  if(randomNumber >= 0 && randomNumber <= 3){
    computerMove = '✊'
    console.log('Computer picked rock')
  }
  else if(randomNumber > 3 && randomNumber <= 6){
    computerMove = '✋'
    console.log('Computer picked paper')
  }
  else if(randomNumber > 6 && randomNumber <= 9){
    computerMove = '✌️'
    console.log('Computer picked scissors')
  }

  compchill.innerText = computerMove;
}

function resultsDisplay() {
   //Results
   if(results === 'win'){
    playerResults.innerText =parseInt(playerResults.innerText) + 1;
  }
  else if(results === 'lose'){
    compResults.innerText = parseInt(compResults.innerText) + 1;
  }
}

function playGame(playerMove) {

  computerSelection()

  if (playerMove === 'rock') {
    if(computerMove === '✊'){
      output.innerText = 'Draw';
      results = 'draw';
      console.log('rock!!!')
    }
    else if(computerMove === '✋'){
      output.innerText = 'Computer Wins';
      results = 'lose';
      console.log('paper!!!')
    }
    else if(computerMove === '✌️'){
      output.innerText = 'Player Wins'
      results = 'win';
      console.log('scissors!!!')
    }
  }

  else if(playerMove === 'paper'){
    if(computerMove === '✊'){
      output.innerText = 'Player Wins';
      results = 'win';
      console.log('rock!!!')
    }
    else if(computerMove === '✋'){
      output.innerText = 'Draw';
      results = 'draw';
      console.log('paper!!!')
    }
    else if(computerMove === '✌️'){
      output.innerText = 'Computer Wins'
      results = 'lose';
      console.log('scissors!!!')
    }
  }
  else if(playerMove === 'scissors'){
    if(computerMove === '✊'){
      output.innerText = 'Computer Wins';
      results = 'lose';
      console.log('rock!!!')
    }
    else if(computerMove === '✋'){
      output.innerText = 'Player Wins';
      results = 'win';
      console.log('paper!!!')
    }
    else if(computerMove === '✌️'){
      output.innerText = 'Draw'
      results = 'draw';
      console.log('scissors!!!')
    }
  }

  resultsDisplay()
}

//rock
rock.addEventListener('click', function game() {
  Playerchill.innerText = '✊'
  console.log('You clicked rock')
  playGame('rock')
})

//Paper
paper.addEventListener('click', function game(){
  Playerchill.innerText = '✋'
  console.log('You clicked Paper')
  playGame('paper')
})

//scissors
scissors.addEventListener("click", function game(){
  Playerchill.innerText = '✌️'
  console.log('You clicked scissors')
  playGame("scissors")
})