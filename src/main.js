//Query selector vars:
// var squareA = document.querySelector(#'a');
// var squareB = document.querySelector(#'a');
// var squareC = document.querySelector(#'a');
// var squareD = document.querySelector(#'a');
// var squareE = document.querySelector(#'a');
// var squareF = document.querySelector(#'a');
// var squareG = document.querySelector(#'a');
// var squareH = document.querySelector(#'a');
// var squareI = document.querySelector(#'a');
var gameBoard = document.querySelector('#gameBoard');
var gameHeading = document.querySelector('#gameHeading');
// var player1Token = document.querySelector('#octopus');
// var player2Token = document.querySelector('#lobster');
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
