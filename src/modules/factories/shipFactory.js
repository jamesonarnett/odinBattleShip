const { equalArray } = require("../utils");

class createShip {
  constructor(name, length) {
    //length is position
    //length = []
    this.name = name;
    this.length = length;
    this.hits = [];
  }

  receivedHit(index) {
    if (this.length.includes(index)) {
      this.hits.push(index);
    }
    return this.hits;
  }
  isSunk() {
    return equalArray(this.length, this.hits) ? true : false;
  }
}

module.exports = createShip;
