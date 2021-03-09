
// Query selector vars:
var gameBoard = document.querySelector('#gameBoard');
var gameInfo = document.querySelector('#gameInfo');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');
// var currentTurnToken = document.querySelector('#token');
var gameSquare = document.querySelectorAll('.game-square');
var game;
// event listeners
window.addEventListener('load', startNewGame);
gameBoard.addEventListener('click', takeATurn);

function startNewGame() {
  game = new Game(Date.now());
  game.keepPlayerScores();
  updateScoreCard();
  resetBoard();
  switchTokenInHeader();
}

function resetBoard() {
  for (var i = 0; i < gameSquare.length; i++) {
      gameSquare[i].innerHTML = '';
  }
}

function takeATurn() {
  placeToken(event);
  switchTokenInHeader();
  evaluateGameResult();
  updateScoreCard();
}

function addPlayerTokens(playerSquares, tokenImage) {
  for (var i = 0; i < gameSquare.length; i++) {
    if (playerSquares.includes(gameSquare[i].id)) {
      gameSquare[i].innerHTML = `${tokenImage}`;
    }
  }
}

function placeToken(event) {
  var octopusImage = `<img class="turn-token" src="assets/octopus.png"/>`;
  var lobsterImage = `<img class="turn-token" src="assets/lobster.png"/>`;
  game.makeMove(event.target.id);
  addPlayerTokens(game.player1Squares, octopusImage);
  addPlayerTokens(game.player2Squares, lobsterImage);
}

function updateHeader(content) {
  gameInfo.innerHTML = `<h1 class="header">${content}</h1>`;
}

function displayWinner(gameResult) {
  updateHeader(gameResult);
  setTimeout(startNewGame, 3000);
}

function evaluateGameResult() {
  if (game.winner === 'player1') {
    displayWinner(`<img class="turn-token" src="assets/octopus.png"/> Wins!`);
  } else if (game.winner === 'player2') {
      displayWinner(`<img class="turn-token" src="assets/lobster.png"/> Wins!`);
  } else if (game.checkForDraw()) {
      displayWinner(`It's a draw!`);
  }
}

function switchTokenInHeader() {
  if (game.turn === 'player2') {
    // currentTurnToken.src = "./assets/lobster.png";
    updateHeader(`It's <img class="turn-token" src="assets/lobster.png"/>'s Turn`);
  } else {
    // currentTurnToken.src = "./assets/octopus.png";
    updateHeader(`It's <img class="turn-token" src="assets/octopus.png"/>'s Turn`);
  }
}

function updateScoreCard() {
  player1Wins.innerText = `${game.player1.wins} Wins`;
  player2Wins.innerText = `${game.player2.wins} Wins`;
    if (game.player1.wins === 1) {
      player1Wins.innerText = `1 Win`;
    }

    if (game.player2.wins === 1) {
      player2Wins.innerText = `1 Win`;
  }
}
