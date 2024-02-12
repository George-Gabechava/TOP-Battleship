// Shutting up eslint about my for...in loops:
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

function Ship(shipName, length, sunk = false, timesHit = 0) {
  this.length = length;
  this.timesHit = timesHit;
  this.sunk = sunk;

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
      console.log("return dis");
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
    // populate each grid with the unhit ship property and ship name
    for (let i = 1; i <= shipLength; i += 1) {
      const currentPos = findEndPosition(i, startPos, shipDirection);
      board[currentPos] = "unhit ship";
      // board[currentPos] = shipObj;
    }
  }

  // code to recieve an attack then send the 'hit' function or record a miss
  function receiveAttack(currentShot) {
    // if (board[currentShot].includes("hit ship") || board[currentShot].includes("shot water")) {
    //   throw new Error("already shot here");
    // }
    // if (board[currentShot].includes("unhit ship")) {
    //   console.log(board[currentShot]);
    //   const thisShip = board[currentShot].Ship.shipName;
    //   console.log(thisShip);
    //   thisShip.hit();
    //   board[currentShot] = "hit ship";
    // } else {
    //   board[currentShot] = "shot water";
    // }
  }

  return {
    board,
    placeShip,
    receiveAttack,
  };
}

module.exports = { Ship, Gameboard };
