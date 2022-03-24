const createShip = require("../src/modules/factories");

it("checks length of ship", () => {
  expect(new createShip("Cruiser", 4)).toEqual({ name: "Cruiser", length: 4 });
});
