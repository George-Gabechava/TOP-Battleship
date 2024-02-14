// Shutting up eslint about my for...in loops:
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// refactor my ship to classes
function Ship(shipName, length, sunk = false, timesHit = 0) {
  function isSunk() {
    if (this.timesHit === this.length) {
      this.sunk = true;
    } else {
      this.sunk = false;
    }
  }

  function hit() {
    this.timesHit += 1;
    this.isSunk();
  }

  return {
    shipName,
    length,
    hit,
    timesHit,
    isSunk,
    sunk,
  };
}

function findEndPosition(shipLength, startPos, shipDirection) {
  // find the current position
  const yStartPos = startPos[0];
  let xStartPos = startPos[1];
  // account for two digits for x=10
  if (startPos.length > 2) {
    xStartPos = "10";
  }
  let xEndPos;
  let yEndPos;

  // find the end position of the current ship given the direction & length
  if (shipDirection === "right") {
    xEndPos = (Number(xStartPos) + shipLength - 1);
    yEndPos = yStartPos;
  }
  if (shipDirection === "up") {
    xEndPos = Number(xStartPos);
    yEndPos = String.fromCharCode(yStartPos.charCodeAt(0) - shipLength + 1);
  }

  // check if end position is out of bounds

  if (xEndPos > 10 || yEndPos < "A") {
    throw new Error("ship cannot be placed out of bounds");
  }

  const endPos = yEndPos + xEndPos.toString();
  return endPos;
}

function Gameboard() {
  const xarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const yarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const board = {};
  const playerShips = [];
  if (board[0] === undefined) {
    for (const i in xarray) {
      for (const j in yarray) {
        const gridPosition = yarray[i] + xarray[j];
        board[gridPosition] = "empty";
      }
    }
  }

  function placeShip(shipObj, startPos, shipDirection = "right") {
    const shipLength = shipObj.length;

    // Find end Position of current placement, ensuring we don't go out of bounds
    const endPos = findEndPosition(shipLength, startPos, shipDirection);

    if (endPos === new Error("ship cannot be placed out of bounds")) {
      return endPos;
    }

    // Now using startPos and endPos, check if ship placements don't overlap
    for (let i = 1; i <= shipLength; i += 1) {
      const currentPos = findEndPosition(i, startPos, shipDirection);
      // Make sure we dont allow ships to be placed ontop on eachother
      if (board[currentPos] !== "empty") {
        throw new Error("can't place ship on another ship");
      }
    }
    const shipGrids = [];
    // populate each grid with the unhit ship property and ship name
    for (let i = 1; i <= shipLength; i += 1) {
      const currentPos = findEndPosition(i, startPos, shipDirection);
      shipGrids.push(currentPos);
      board[currentPos] = "unhit ship";
    }
    // Add grids the ship occupies to the ship properties
    shipObj.grids = shipGrids;

    // Add ship to player ships
    playerShips.push(shipObj);
  }

  // code to recieve an attack then send the 'hit' function or record a miss
  function receiveAttack(currentShot) {
    if (board[currentShot] === "shot ship" || board[currentShot] === "shot water") {
      throw new Error("already shot here");
    }
    if (board[currentShot] === "unhit ship") {
      for (const i in playerShips) {
        const currentShipGrids = playerShips[i].grids;
        if (currentShipGrids.includes(currentShot)) {
          board[currentShot] = "shot ship";
          playerShips[i].hit();
        }
      }
    } else {
      board[currentShot] = "shot water";
    }
  }

  return {
    board,
    placeShip,
    receiveAttack,
    playerShips,
  };
}

function Player(playerName = "P1", currentTurn) {
  const player1Board = Gameboard();
  const player2Board = Gameboard();

  if (player1Board.playerShips.length < 5) {
    // if (player2Board.playerShips.length < 5) {
    player1Board.placeShip(Ship("carrierP1", 5), "A1");
    player1Board.placeShip(Ship("battleshipP1", 4), "E1");
    player1Board.placeShip(Ship("cruiserP1", 3), "F1");
    player1Board.placeShip(Ship("submarineP1", 3), "J2", "up");
    player1Board.placeShip(Ship("patrolP1", 2), "D3", "up");
    // }
  }

  if (playerName != "P1" && player2Board.playerShips.length < 5) {
    // if (player2Board.playerShips.length < 5) {
    player2Board.placeShip(Ship("carrierP2", 5), "A2");
    player2Board.placeShip(Ship("battleshipP2", 4), "E2");
    player2Board.placeShip(Ship("cruiserP2", 3), "F3");
    player2Board.placeShip(Ship("submarineP2", 3), "J10", "up");
    player2Board.placeShip(Ship("patrolP2", 2), "D9", "up");
    // }
  }

  // Generate board for AI to choose randomly
  const xarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const yarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const board = [];

  if (board[0] === undefined) {
    for (const i in xarray) {
      for (const j in yarray) {
        const gridPosition = yarray[i] + xarray[j];
        board.push(gridPosition);
      }
    }
  }

  // if (currentTurn === "P1") {
  //   player2Board.receiveAttack("F5");
  //   currentTurn = "P2";
  // }

  if (currentTurn === "P2") {
    // Get a random board position & remove it from selections
    const randomShotIndex = [Math.floor(Math.random() * board.length)];
    const randomShot = board[randomShotIndex];
    board.splice(randomShotIndex, 1);
    console.log("AI Shoots", randomShot);

    player1Board.receiveAttack(randomShot);
    currentTurn = "P1";
  }

  return {
    player1Board,
    player2Board,
  };
}

module.exports = { Ship, Gameboard, Player };
