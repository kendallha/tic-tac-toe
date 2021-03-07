
//Query selector vars:
var gameBoard = document.querySelector('#gameBoard');
var gameInfo = document.querySelector('#gameInfo');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');
// var currentTurnToken = document.querySelector('#token');
var gameSquare = document.querySelectorAll('.game-square');
var game;
var octopusImage =
`<img class="turn-token" src="assets/octopus.png"/>`;
var lobsterImage =
`<img class="turn-token" src="assets/lobster.png"/>`;
//event listeners
window.addEventListener('load', startGame);
gameBoard.addEventListener('click', takeATurn);

function startGame() {
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
  displayGameResult();
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
  game.makeMove(event.target.id);
  addPlayerTokens(game.player1Squares, octopusImage);
  addPlayerTokens(game.player2Squares, lobsterImage);
}

function updateHeader(content) {
  gameInfo.innerHTML = `<h1 class="header">${content}</h1>`;
}

function declareWinner(gameResult) {
  updateHeader(gameResult);
  setTimeout(startGame, 3000);
}

function displayGameResult() {
  if (game.winner === 'player1') {
    declareWinner(`${octopusImage} Wins!`);
  } else if (game.winner === 'player2') {
      declareWinner(`${lobsterImage} Wins!`);
  } else if (game.checkForTie()) {
      declareWinner(`It's a draw!`);
  }
}

function switchTokenInHeader() {
  if (game.turn === 'player2') {
    // currentTurnToken.src = "./assets/lobster.png";
    updateHeader(`It's ${lobsterImage}'s Turn`);
  } else {
    // currentTurnToken.src = "./assets/octopus.png";
    updateHeader(`It's ${octopusImage}'s Turn`);
  }
}

function updateScoreCard() {
  player1Wins.innerText = `${game.player1.wins.length} Wins`;
  player2Wins.innerText = `${game.player2.wins.length} Wins`;
    if (game.player1.wins.length === 1) {
      player1Wins.innerText = `1 Win`;
    }

    if (game.player2.wins.length === 1) {
      player2Wins.innerText = `1 Win`;
  }
}
