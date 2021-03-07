//Query selector vars:
var gameBoard = document.querySelector('#gameBoard');
var gameInfo = document.querySelector('#gameInfo');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');
var currentTurnToken = document.querySelector('#token');
var gameSquare = document.querySelectorAll('.game-square');
var game;
//event listeners
window.addEventListener('load', startGame);
gameBoard.addEventListener('click', takeATurn);

function startGame() {
  game = new Game(Date.now());
  game.keepPlayerScores();
  updateScoreCard();
  for (var i = 0; i < gameSquare.length; i++) {
    gameSquare[i].innerHTML = '';
  }
  switchTokenInHeader();
}

function takeATurn() {
  addToken(event);
  switchTokenInHeader();
  displayGameResult();
  updateScoreCard();
}

function addToken(event) {
  if (game.turn === 'player1' && !game.player1Squares.includes(event.target.id)
    && !game.player2Squares.includes(event.target.id))  {
    event.target.innerHTML = '<img class="player-token" src="assets/octopus.png"/>';
  } else if (game.turn === 'player2' && !game.player1Squares.includes(event.target.id)
    && !game.player2Squares.includes(event.target.id)){
    event.target.innerHTML = '<img class="player-token" src="assets/lobster.png"/>';
  }

  game.makeMove(event.target.id);
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
    declareWinner(`<img id="token" class="turn-token" src="assets/octopus.png"/> Wins!`);
  } else if (game.winner === 'player2') {
      declareWinner(`<img id="token" class="turn-token" src="assets/lobster.png"/> Wins!`);
  } else if (game.checkForTie()) {
      declareWinner(`It's a draw!`);
  }
}

function switchTokenInHeader() {
  if (game.turn === 'player2') {
    // currentTurnToken.src = "./assets/lobster.png";
    updateHeader(`It's <img id="token" class="turn-token" src="assets/lobster.png">'s Turn`);
  } else {
    // currentTurnToken.src = "./assets/octopus.png";
    updateHeader(`It's <img id="token" class="turn-token" src="assets/octopus.png">'s Turn`);
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
