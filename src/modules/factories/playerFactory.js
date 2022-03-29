const GameBoard = require("./boardFactory");

class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.board = new GameBoard(101);
  }
  //AI needs to be able to make legal moves

  _computerMove() {}
}

//fireShot??

module.exports = Player;
