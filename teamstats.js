const team = {
  _players: [
    {firstName: "Ronaldo",
    lastName: "Fenomeno",
    age: 38},
    {firstName: "Ronaldo",
    lastName: "Gaucho",
    age: 36},
    {firstName: "Neymar",
    lastName: "13",
    age: 37},
  ],
  
  _games: [
    {opponent: "Messi",
    teamPoints: 3,
    opponentPoints: 2},
    {opponent: "CR",
    teamPoints: 2,
    opponentPoints: 1},
    {opponent: "Muller",
    teamPoints: 1,
    opponentPoints: 3},
  ],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer: function(firstName, lastName, age) {
    const newPlayer = {firstName: firstName,
                   lastName: lastName,
                   age: age};
    this._players.push(newPlayer);
  },
  
  addGame: function(opponentName, teamPoints, opponentPoints) {
    const newGame = {opponent: opponentName,
                    teamPoints: teamPoints,
                    opponentPoints: opponentPoints};
    this._games.push(newGame);
  },
  
};

//team.addPlayer('Steph', 'Curry', 28);
//team.addPlayer('Lisa', 'Leslie', 44);
//team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Outlaws', 1, 3);
team.addGame('Gladiators', 3, 1);
team.addGame('Mayhem', 3, 0);

console.log(team.players);
console.log();
console.log(team.games);