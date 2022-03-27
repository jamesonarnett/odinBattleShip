const GameBoard = require("../src/modules/factories/boardFactory");

describe("board functions", () => {
  it("should produce a gameboard 10x1/10squares", () => {
    expect(new GameBoard(11)).toEqual({
      gameBoardArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    });
  });

  it("checks ship placement", () => {
    expect(new GameBoard(11).placeShip("Cruiser", [1, 2, 3, 4])).toBe([
      1, 2, 3, 4,
    ]);
  });
});
