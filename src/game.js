class Game {
  constructor(id) {
    this.player1 = new Player(1, token);
    this.player2 = new Player(2, token);
    this.turn = player1;
    this.gameId = id;
  }

var winningCombos = [['a','b','c'],['d','e','f'],['g','h','i'],['a','d','g'],
['b','e','h'],['c','f','i'],['c','e','g'],['a','e','i']];
var player1Spots = [];
var player2spots = [];


  startGame() {
  player1Spots = [];
  player2Spots = [];
  var game = new Game(date.Now());
  }

  makeMove(spot) {
    if (this.turn === player1) {
    player1Spots = player1Spots.concat(spot);
    this.turn = player2;
  } else {
    player2Spots = player2Spots.concat(spot);
    this.turn = player1;
  }

    checkForWinner();
    checkForTie();
  }

  checkForWinner(player) {
   for (var i = 0; i < winningCombos.length; i++) {
      if ((player1Spots.includes(win[i][0])) &&
      (player1Spots.includes(win[i][1])) && (player1Spots.includes(win[i][2]))) {
        player1.wins.push(game);
        return 'Player 1 wins!';
      } else if ((player2Spots.includes(win[i][0])) &&
      (player2Spots.includes(win[i][1])) && (player2Spots.includes(win[i][2]))) {
        player2.wins.push(game);
        return 'Player 2 wins!';)
      }
    }
  }

  checkForTie() {
    if ((player1Spots.length + player2Spots.length) === 9 ) {
      return 'This game is a tie!';
      startGame();
    }
  }

}
