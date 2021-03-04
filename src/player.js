class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = [];
  }

  saveWinsToStorage() {
    var savedWins = JSON.stringify(this.wins);
    localStorage.setItem(`savedWins${this.id}`, savedWins);
    console.log("saving wins");
  }

  retrieveWinsFromStorage() {
    var savedWins = localStorage.getItem(`savedWins${this.id}`);
    var parsedWinsArray = JSON.parse(savedWins) || [];
    console.log("retrieving wins");
    for (var i = 0; i < parsedWinsArray.length; i++) {
      this.wins.push(parsedWinsArray[i]);
    }
  }
}
