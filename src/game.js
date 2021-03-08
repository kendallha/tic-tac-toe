class Game {
  constructor(id) {
    this.player1 = new Player(1, 'octopus');
    this.player2 = new Player(2, 'lobster');
    this.turn = 'player1';
    this.gameId = id;
    this.player1Squares = [];
    this.player2Squares = [];
    this.winner;

  }

  keepPlayerScores() {
    this.player1.retrieveWinsFromStorage();
    this.player2.retrieveWinsFromStorage();
  }

  makeMove(square) {
    if (this.turn === 'player1' && !this.player1Squares.includes(square) && !this.player2Squares.includes(square)
      && !this.winner) {
      this.player1Squares.push(square);
      this.turn = 'player2';
    } else if (this.turn === 'player2' && !this.player1Squares.includes(square) && !this.player2Squares.includes(square)
      && !this.winner) {
      this.player2Squares.push(square);
      this.turn = 'player1';
  }

    this.checkForWinner();
    this.checkForDraw();
  }


  checkForWinner() {
    var winningCombos = [['a','b','c'],['d','e','f'],['g','h','i'],['a','d','g'],
    ['b','e','h'],['c','f','i'],['c','e','g'],['a','e','i']];
    for (var i = 0; i < winningCombos.length; i++) {
      if ((this.player1Squares.includes(winningCombos[i][0])) &&
        (this.player1Squares.includes(winningCombos[i][1])) && (this.player1Squares.includes(winningCombos[i][2]))) {
          this.player1.wins.push(this.gameId);
          this.winner = 'player1';
        } else if ((this.player2Squares.includes(winningCombos[i][0])) &&
          (this.player2Squares.includes(winningCombos[i][1])) && (this.player2Squares.includes(winningCombos[i][2]))) {
            this.player2.wins.push(this.gameId);
            this.winner = 'player2';
      }
    }
      this.player1.saveWinsToStorage();
      this.player2.saveWinsToStorage();
  }

  checkForDraw() {
    if ((this.player1Squares.length + this.player2Squares.length) === 9 ) {
      this.winner = "Draw";
      return true;
    }
  }
}
