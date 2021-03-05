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
  evaluateGameStatus();
  updateScoreCard();
}

function addToken(event) {
  if (game.turn === 'player1') {
    event.target.innerHTML = '<img class="player-token" src="assets/octopus.png"/>';
  } else {
    event.target.innerHTML = '<img class="player-token" src="assets/lobster.png"/>';
  }

  game.makeMove(event.target.id);
}

// function declareWinner(winner) {
//   gameInfo.innerHTML = `<h1 class="instructions"><img id="token"
//   class="turn-token" src= winner /> Wins!</h1>`;
//   setTimeout(startGame, 3000);
// }
function evaluateGameStatus() {
  if (game.winner === 'player1') {
    gameInfo.innerHTML = `<h1 class="header"><img id="token"
    class="turn-token" src="assets/octopus.png"/> Wins!</h1>`;
    setTimeout(startGame, 3000);
    // declareWinner("assets/octopus.png");
  } else if (game.winner === 'player2') {
      gameInfo.innerHTML = `<h1 class="header"><img id="token"
      class="turn-token" src="assets/lobster.png"/> Wins!</h1>`;
      setTimeout(startGame, 3000);
      // declareWinner("/Users/kendallhaworth/turing/mod1/tic-tac-toe/assets/lobster.png");
  } else if (game.checkForTie()) {
      gameInfo.innerHTML = `<h1 class="header">It's a Draw!</h2>`
      setTimeout(startGame, 3000);
  }
}

function switchTokenInHeader() {
  if (game.turn === 'player2') {
    // currentTurnToken.src = "./assets/lobster.png";
    gameInfo.innerHTML = `<h1 class="header">It's <img id="token" class="turn-token" src="assets/lobster.png">'s Turn</h1>`;
  } else {
    // currentTurnToken.src = "./assets/octopus.png";
    gameInfo.innerHTML = `<h1 class="header">It's <img id="token" class="turn-token" src="assets/octopus.png">'s Turn</h1>`;
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
