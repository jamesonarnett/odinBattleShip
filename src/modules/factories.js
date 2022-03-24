class createShip {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }

  hits(numberHit) {
    //length = []
    // when a ship is hit, use array to mark hit location?
    // [1,2,3,4,5]
    //[1,2,x,x,x]
    //if all x hit, isSunk?
  }
  isSunk(length) {
    //if(all x on ship length){
    // ship is sunk
    // check loss?
    // }
  }
}

class Player {
  constructor(name, isTurn) {
    this.name = name;
  }
  //need to involve some sort of isTurn/state
  //AI needs to be able to make legal moves
}

class GameBoard {
  constructor(gridSize) {
    this.gridSize = gridSize;
    //... they will both be the same size, unsure here for now
  }

  //place ships at specific coords within gameboard
  //recieveAttack takes coords to determine hits
  //keep track of misses && display
  //check loss here????
}
module.exports = createShip;
