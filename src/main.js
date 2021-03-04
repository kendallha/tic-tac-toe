//Query selector vars:
var gameBoard = document.querySelector('#gameBoard');
var gameHeading = document.querySelector('#gameHeading');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');
var currentTurnToken = document.querySelector('#turnToken');
var game;
//event listeners
window.addEventListener('load', startGame);
gameBoard.addEventListener('click', takeATurn);

function startGame() {
  game = new Game(Date.now());
}

function takeATurn() {
  addToken(event);
  evaluateGameStatus();
  switchTokenInHeader();
  updateWins();
}

function addToken(event) {
  if (game.turn === 'player1') {
    event.target.innerHTML = '<img class="player-token" src="assets/octopus.png">';
  } else {
    event.target.innerHTML = '<img class="player-token" src="assets/lobster.png"/>';
  }

  game.makeMove(event.target.id);
}

function evaluateGameStatus() {
  if (game.winner === 'player1') {
    gameHeading.innerHTML = `<h1 class="instructions"><img id="turnToken"
    class="turn-token" src="assets/octopus.png"/> Wins!</h1>`;
  } else if (game.winner === 'player2') {
      gameHeading.innerHTML = `<h1 class="instructions"><img id="turnToken"
      class="turn-token" src="assets/lobster.png"/> Wins!</h1>`;
  } else if (game.checkForTie()) {
      gameHeading.innerHTML = `It's a Tie!`;
  }
}

function switchTokenInHeader() {
  if (game.turn === 'player2') {
    currentTurnToken.src = 'assets/lobster.png';
  } else {
    currentTurnToken.src = 'assets/octopus.png';
  }
}


function updateWins() {
  if (game.player1.wins.length === 1) {
    player1Wins.innerText = `1 Win`;
  } else if (game.player1.wins.length === 1) {
    player2Wins.innerText = `1 Win`;
  } else {
    player1Wins.innerText = `${game.player1.wins.length} Wins`;
    player2Wins.innerText = `${game.player2.wins.length} Wins`;
  }
}
