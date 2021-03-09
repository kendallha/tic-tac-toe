class Game {
  constructor(id) {
    this.player1 = new Player(1, `<img class="turn-token" src="assets/octopus.png"/>`);
    this.player2 = new Player(2, `<img class="turn-token" src="assets/lobster.png"/>`);
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

  checkMoveValidity(square) {
    return (!this.player1Squares.includes(square) && !this.player2Squares.includes(square) && !this.winner && square !== '');
}

  makeMove(square) {
    if (this.turn === 'player1' && this.checkMoveValidity(square)) {
      this.player1Squares.push(square);
      this.turn = 'player2';
    } else if (this.turn === 'player2' && this.checkMoveValidity(square)) {
      this.player2Squares.push(square);
      this.turn = 'player1';
  }

    this.declareWinner();
    this.checkForDraw();
  }

  checkForWinner(playerSquares) {
    var winningCombos = [['a','b','c'],['d','e','f'],['g','h','i'],['a','d','g'],
    ['b','e','h'],['c','f','i'],['c','e','g'],['a','e','i']];
    for (var i = 0; i < winningCombos.length; i++) {
      if ((playerSquares.includes(winningCombos[i][0])) &&
        (playerSquares.includes(winningCombos[i][1])) && (playerSquares.includes(winningCombos[i][2])) && !this.winner) {
        return true;
      }
    }
  }

  declareWinner() {
      if (this.checkForWinner(this.player1Squares)) {
          this.player1.wins++;
          this.winner = 'player1';
        } else if (this.checkForWinner(this.player2Squares)) {
            this.player2.wins++;
            this.winner = 'player2';
      }

      this.player1.saveWinsToStorage();
      this.player2.saveWinsToStorage();
  }

  checkForDraw() {
    if ((this.player1Squares.length + this.player2Squares.length) === 9 && !this.winner) {
      this.winner = 'Draw';
      return true;
    }
  }
}
