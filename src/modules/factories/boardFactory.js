const _ = require("lodash");
const createShip = require("./shipFactory");

class GameBoard {
  gameBoardArray = [];

  constructor(squares) {
    // for (let i = 0; i <= squares; i++) {
    //   if (i !== 0) {
    //     this.gameBoardArray.push(i);
    //   }
    // }

    this.gameBoardArray = _.range(1, squares);
    //lodash does not include last num, use 101 for 100 squares
    //[1,2,3,4] = ship with 4 length placed horizontally on first row
    //[1,11,21,31] = ship with 4 length placed vertically on first column
  }

  placeShip(name, location) {
    return new createShip(name, location);

    //
  }

  recieveHit(index) {}

  recieveMiss(index) {}

  checkLoss() {}
}

module.exports = GameBoard;
