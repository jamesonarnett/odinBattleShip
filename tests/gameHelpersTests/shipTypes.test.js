const shipTypes = require("../../src/modules/gameHelpers/shipTypes");

describe("Tests ship types", () => {
  it("Tests Carrier Ship Type", () => {
    expect(shipTypes[0]).toEqual({ name: "Carrier", length: 5 });
  });

  it("Tests Battleship Ship Type", () => {
    expect(shipTypes[1]).toEqual({ name: "Battleship", length: 4 });
  });

  it("Tests Cruiser Ship Type", () => {
    expect(shipTypes[2]).toEqual({ name: "Cruiser", length: 3 });
  });

  it("Tests Submarine Ship Type", () => {
    expect(shipTypes[3]).toEqual({ name: "Submarine", length: 3 });
  });

  it("Tests Detroyer Ship Type", () => {
    expect(shipTypes[4]).toEqual({ name: "Destroyer", length: 2 });
  });
});
