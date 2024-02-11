const { Ship, Gameboard } = require("./main");

const carrierP1 = Ship("carrier", 5);
const cruiserP1 = Ship("cruiserP1", 3);
const submarineP1 = Ship("submarineP1", 3);

describe("Ship Tests", () => {
  test("creates a Ship object with correct properties", () => {
    expect(carrierP1).toHaveProperty("shipName", "carrier");
    expect(carrierP1).toHaveProperty("length", 5);
    expect(carrierP1).toHaveProperty("sunk", false); // Initial state
    expect(carrierP1).toHaveProperty("timesHit", 0); // Initial state
  });

  test("hit() increments timesHit and updates sunk when enough hits", () => {
    cruiserP1.hit();
    expect(cruiserP1.timesHit).toBe(1);
    expect(cruiserP1.sunk).toBe(false);

    cruiserP1.hit();
    cruiserP1.hit();
    expect(cruiserP1.timesHit).toBe(3);
    expect(cruiserP1.sunk).toBe(true); // Sunk after 3 hits

    expect(cruiserP1).toHaveProperty("length", 3);
  });
});

describe("Gameboard Tests", () => {
  test(("gameboard returns a board object"), () => {
    const gameboardP1 = Gameboard();

    expect(gameboardP1.board).toHaveProperty("G2", "empty");
  });

  test(("can place a ship on a valid board spot and detect it"), () => {
    const gameboardP1 = Gameboard();

    gameboardP1.placeShip(carrierP1, "A6");
    expect(gameboardP1.board).toHaveProperty("A6", "unhit ship");
    expect(gameboardP1.board).toHaveProperty("A10", "unhit ship");
    expect(gameboardP1.board).toHaveProperty("A7", "unhit ship");

    expect(() => {
      gameboardP1.placeShip(submarineP1, "B1", "up");
    }).toThrow(new Error("ship cannot be placed out of bounds"));

    gameboardP1.placeShip(cruiserP1, "E10", "up");
    expect(gameboardP1.board).toHaveProperty("E10", "unhit ship");
    expect(gameboardP1.board).toHaveProperty("D10", "unhit ship");
    expect(gameboardP1.board).toHaveProperty("B5", "empty");
  });

  test("out of bounds wrapped test", () => {
    function placeOutOfBounds() {
      const gameboardP1 = Gameboard();
      gameboardP1.placeShip(submarineP1, "B1", "up");
    }
    expect(placeOutOfBounds).toThrow(new Error("ship cannot be placed out of bounds"));
  });
});
