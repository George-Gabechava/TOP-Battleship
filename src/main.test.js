const { Ship, Gameboard } = require("./main");

const carrierP1 = Ship("carrier", 5);
const cruiserP1 = Ship("cruiserP1", 3);

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
  test(("gameboard returns an object"), () => {
    const gameboardP1 = Gameboard();

    expect(gameboardP1.board).toHaveProperty("G2", "empty");
  });

  test(("can place a ship on the board and detect it"), () => {
    const gameboardP1 = Gameboard();

    expect(gameboardP1.placeShip(carrierP1, "A1")).toBe("A5");
    expect(gameboardP1.board).toHaveProperty("A1", "empty");
  });
});
