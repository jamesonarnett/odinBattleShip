const GameBoard = require("../src/modules/factories/boardFactory");
const Player = require("../src/modules/factories/playerFactory");

describe("Player functions", () => {
  let player = new Player("Jameson");

  it("checks proper creation of player object", () => {
    expect(player).toEqual(
      expect.objectContaining({
        name: "Jameson",
        ships: [],
        board: new GameBoard(101),
      })
    );
  });
});
