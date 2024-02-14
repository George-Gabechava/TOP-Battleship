const { Ship, Gameboard, Player } = require("./main");

// ship objects to use for tests
const carrierP1 = Ship("carrierP1", 5);
const cruiserP1 = Ship("cruiserP1", 3);
const submarineP1 = Ship("submarineP1", 3);

describe("Ship Tests", () => {
  test("Ship object  creation has correct properties", () => {
    expect(carrierP1).toHaveProperty("shipName", "carrierP1");
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
    expect(cruiserP1).toHaveProperty("timesHit", 3);
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
      gameboardP1.placeShip(submarineP1, "C6", "up");
    }).toThrow(new Error("can't place ship on another ship"));
    expect(gameboardP1.board).toHaveProperty("B6", "empty");

    gameboardP1.placeShip(cruiserP1, "E10", "up");
    expect(gameboardP1.board).toHaveProperty("E10", "unhit ship");
    expect(gameboardP1.board).toHaveProperty("D10", "unhit ship");
    expect(gameboardP1.board).toHaveProperty("B5", "empty");

    gameboardP1.receiveAttack("A10");
    expect(carrierP1.grids).toStrictEqual(["A6", "A7", "A8", "A9", "A10"]);
    expect(carrierP1).toHaveProperty("timesHit", 1);
    gameboardP1.receiveAttack("G10");
    expect(gameboardP1.board).toHaveProperty("G10", "shot water");
    expect(gameboardP1.board).toHaveProperty("A7", "unhit ship");
    expect(carrierP1).toHaveProperty("timesHit", 1);
  });

  test("out of bounds wrapped test", () => {
    const gameboardP1 = Gameboard();
    function placeOutOfBounds() {
      gameboardP1.placeShip(submarineP1, "B1", "up");
    }
    expect(placeOutOfBounds).toThrow(new Error("ship cannot be placed out of bounds"));
    expect(gameboardP1.board).toHaveProperty("B1", "empty");
  });
});

describe("Player Tests", () => {
  const player1 = Player("P1");
  const player2 = Player("P2");
  test(("Ships have been placed"), () => {
    expect(player1.playerBoard.board).toHaveProperty("B1", "empty");
    expect(player1.playerBoard.board).toHaveProperty("F3", "unhit ship");
    expect(player1.playerBoard.playerShips[0].grids).toStrictEqual(["A2", "A3", "A4", "A5", "A6"]);

    expect(player2.playerBoard.board).toHaveProperty("B1", "empty");
    expect(player2.playerBoard.board).toHaveProperty("F3", "unhit ship");
    expect(player2.playerBoard.playerShips[4].grids).toStrictEqual(["D3", "C3"]);
  });
});
