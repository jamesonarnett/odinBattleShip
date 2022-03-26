const createShip = require("../src/modules/factories/shipFactory");

it("checks proper usage of ship object", () => {
  expect(new createShip("Cruiser", [1, 2, 3, 4])).toEqual({
    name: "Cruiser",
    length: [1, 2, 3, 4],
    hits: [],
  });
});

describe("ship functions", () => {
  let ship1;

  it("checks ship is sunk FALSE", () => {
    ship1 = new createShip("Cruiser", [1, 2, 3, 4]);
    expect(ship1.isSunk()).toBe(false);
  });

  it("checks ship hits", () => {
    ship1 = new createShip("Cruiser", [1, 2, 3, 4]);
    expect(ship1.receivedHit(1)).toEqual([1]);
  });

  it("checks multiple ship hits", () => {
    ship1 = new createShip("Cruiser", [1, 2, 3, 4]);
    ship1.receivedHit(1);
    ship1.receivedHit(2);
    expect(ship1.hits).toEqual([1, 2]);
  });

  it("test hits sink ship", () => {
    ship1 = new createShip("Cruiser", [1, 2, 3, 4]);
    ship1.receivedHit(2);
    ship1.receivedHit(1);
    ship1.receivedHit(4);
    ship1.receivedHit(3);
    expect(ship1.isSunk()).toBe(true);
  });

  it("test hits DO NOT sink ship", () => {
    ship1 = new createShip("Cruiser", [1, 2, 3, 4]);
    ship1.receivedHit(1);
    ship1.receivedHit(4);
    ship1.receivedHit(3);
    expect(ship1.isSunk()).toBe(false);
  });
});
