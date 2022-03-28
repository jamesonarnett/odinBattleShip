const _ = require("lodash");
const createShip = require("./shipFactory");

class GameBoard {
  gameBoardArray = [];

  constructor(squares) {
    this.gameBoardArray = _.range(0, squares);
    //lodash does not include last num, use 101 for 100 squares
    //[1,2,3,4] = ship with 4 length placed horizontally on first row
    //[1,11,21,31] = ship with 4 length placed vertically on first column
  }

  placeShip(name, location) {
    let ship = new createShip(name, location);
    return ship.length;
  }

  recieveHit(index) {
    if (this.gameBoardArray.includes(index)) {
      this.gameBoardArray[index] = "x";
      //mark ship hit in shipFactory?
      //update DOM to include marker for hit
      return this.gameBoardArray;
    }
  }

  recieveMiss(index) {}

  checkLoss() {}
}

module.exports = GameBoard;
