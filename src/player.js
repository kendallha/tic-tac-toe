class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var savedWins = JSON.stringify(this.wins);
    localStorage.setItem(`savedWins${this.id}`, savedWins);
  }

  retrieveWinsFromStorage() {
    var savedWins = localStorage.getItem(`savedWins${this.id}`);
    var parsedWins = JSON.parse(savedWins) || 0;
    this.wins = parsedWins;
  }
}
