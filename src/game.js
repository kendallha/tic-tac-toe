class Game {
  constructor(id) {
    this.player1 = new Player(1, 'frog');
    this.player2 = new Player(2, 'sheep');
    this.turn = 'player1';
    this.gameId = id;
    this.player1Spots = [];
    this.player2Spots = [];

  }

  makeMove(spot) {
    if (this.turn === 'player1') {
    this.player1Spots.push(spot);
    console.log(this.player1Spots);
    this.turn = 'player2';
  } else {
    this.player2Spots.push(spot);
    this.turn = 'player1';
  }

    this.checkForWinner();
    this.checkForTie();
  }


  checkForWinner() {
  var winningCombos = [['a','b','c'],['d','e','f'],['g','h','i'],['a','d','g'],
    ['b','e','h'],['c','f','i'],['c','e','g'],['a','e','i']];
   for (var i = 0; i < winningCombos.length; i++) {
      if ((this.player1Spots.includes(winningCombos[i][0])) &&
      (this.player1Spots.includes(winningCombos[i][1])) && (this.player1Spots.includes(winningCombos[i][2]))) {
        this.player1.wins.push(this.gameId);
        console.log('Player 1 wins!');
      } else if ((this.player2Spots.includes(winningCombos[i][0])) &&
      (this.player2Spots.includes(winningCombos[i][1])) && (this.player2Spots.includes(winningCombos[i][2]))) {
        this.player2.wins.push(this.gameId);
        return 'Player 2 wins!';
      }
    }
  }

  checkForTie() {
    if ((this.player1Spots.length + this.player2Spots.length) === 9 ) {
      console.log('This game is a tie!');
      return true;
  
    }
  }


  }

}
