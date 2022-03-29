const GameBoard = require("./boardFactory");

class Player {
  constructor(name, isTurn) {
    this.name = name;
    //isTurn?
    this.ships = [];
    this.board = new GameBoard(101);
  }
  //AI needs to be able to make legal moves

  _computerMove() {}
}

//fireShot??

module.exports = Player;
