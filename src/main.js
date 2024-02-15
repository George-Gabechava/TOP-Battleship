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
          return "hit";
        }
      }
    } else {
      board[currentShot] = "shot water";
      return "miss";
    }
  }

  return {
    board,
    placeShip,
    receiveAttack,
    playerShips,
  };
}

function Player(playerName) {
  const playerBoard = Gameboard();

  // Generate board for AI to choose randomly
  const xarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const yarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const board = [];

  if (board[0] === undefined && playerName === "P2") {
    for (const i in xarray) {
      for (const j in yarray) {
        const gridPosition = yarray[i] + xarray[j];
        board.push(gridPosition);
      }
    }
  }

  if (playerName === "P1" && playerBoard.playerShips.length < 5) {
    // if (player2Board.playerShips.length < 5) {
    playerBoard.placeShip(Ship("carrierP1", 5), "A2");
    playerBoard.placeShip(Ship("battleshipP1", 4), "E1");
    playerBoard.placeShip(Ship("cruiserP1", 3), "F1");
    playerBoard.placeShip(Ship("submarineP1", 3), "J2", "up");
    playerBoard.placeShip(Ship("patrolP1", 2), "D3", "up");
    // }
  }

  if (playerName === "P2" && playerBoard.playerShips.length < 5) {
    let stopper = 0;
    const shipsToPlace = [Ship("carrierP2", 5), Ship("battleshipP2", 4), Ship("cruiserP2", 3), Ship("submarineP2", 3), Ship("patrolP2", 2)];
    // issue is we are placing the carrier on itself, need to do one by one
    // playerBoard.placeShip(Ship("carrierP2", 5), "A2");
    // playerBoard.placeShip(Ship("battleshipP2", 4), "B2");
    // playerBoard.placeShip(Ship("cruiserP2", 3), "J1", "up");
    // playerBoard.placeShip(Ship("submarineP2", 3), "J2", "up");
    while (playerBoard.playerShips.length < 5) {
      try {
        for (let i = 0; i < 5; i++) {
          const randomPlacements = AIplace();
          playerBoard.placeShip(shipsToPlace[i], randomPlacements[0], randomPlacements[1]);
        }
      } catch (e) {
        stopper++;
        if (stopper > 100) {
          break;
        }
      }
    }
    console.log(playerBoard, playerName);
  }

  // Have the AI shoot a random location
  function AIshoot() {
    const randNum = Math.floor(Math.random() * board.length);
    const randShot = board[randNum];
    board.splice(randNum, 1);
    console.log(board);
    return randShot;
  }

  function AIplace() {
    const randomPlacement = [];
    const randNum = Math.floor(Math.random() * board.length);
    randomPlacement.push(board[randNum]);
    const zeroorone = Math.round(Math.random());
    if (zeroorone === 0) {
      randomPlacement.push("right");
    } else {
      randomPlacement.push("up");
    }
    return randomPlacement;
  }

  return {
    playerBoard,
    AIshoot,
    AIplace,
  };
}

module.exports = { Ship, Gameboard, Player };
