const GameBoard = require("./boardFactory");

class Player {
  constructor(name, isTurn) {
    this.name = name;
    //isTurn?
    this.ships = [];
    this.gameBoard = new GameBoard();
  }
  //need to involve some sort of isTurn/state
  //AI needs to be able to make legal moves

  _computerMove() {}
}

//fireShot??

module.exports = Player;
