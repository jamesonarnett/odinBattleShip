const _ = require("lodash");
const createShip = require("./shipFactory");

class GameBoard {
  gameBoardArray = [];

  constructor(squares) {
    this.gameBoardArray = _.range(0, squares);
    //lodash does not include last num, use 101 for 100 squares
    //[0,1,2,3] = ship with 4 length placed horizontally on first row
    //[0,10,20,30] = ship with 4 length placed vertically on first column
  }

  placeShip(name, location) {
    let ship = new createShip(name, location);
    return ship.length;
  }

  recieveHit(index) {
    if (this.gameBoardArray.includes(index)) {
      //needs to check if ship is in location
      this.gameBoardArray[index] = "x";
      //mark ship hit in shipFactory?
      //update DOM to include marker for hit
      return this.gameBoardArray;
    }
  }

  recieveMiss(index) {
    if (this.gameBoardArray.includes(index)) {
      //needs to check if ship is in location
      this.gameBoardArray[index] = "";
    }
    return this.gameBoardArray;
  }

  checkLoss() {}
}

module.exports = GameBoard;
