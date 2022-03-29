const _ = require("lodash");
const createShip = require("./shipFactory");

class GameBoard {
  constructor(squares) {
    this.board = _.range(0, squares);
    //lodash does not include last num, use 101 for 100 squares
    //[0,1,2,3] = ship with 4 length placed horizontally on first row
    //[0,10,20,30] = ship with 4 length placed vertically on first column
  }

  placeShip(name, location) {
    let ship = new createShip(name, location);
    return ship.length;
  }

  recieveHit(index) {
    if (this.board.includes(index)) {
      //needs to check if ship is in location
      this.board[index] = "x";
      //mark ship hit in shipFactory?
      //update DOM to include marker for hit
      return this.board;
    }
  }

  recieveMiss(index) {
    if (this.board.includes(index)) {
      //needs to check if ship is in location
      this.board[index] = "";
    }
    return this.board;
  }

  checkLoss() {}
}

module.exports = GameBoard;
