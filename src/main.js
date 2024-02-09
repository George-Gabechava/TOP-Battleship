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
    const endPos = findEndPosition(shipLength, startPos, shipDirection);
    if (endPos == "Error") {
      return endPos;
    }
    // Now using startPos and endPos, we can populate the board with this ship
    for (let i = 1; i <= shipLength; i += 1) {
      const currentPos = findEndPosition(i, startPos, shipDirection);
      board[currentPos] = "unhit ship";
    }
    // populate each grid with the unhit ship property
  }

  function receiveAttack(x, y) {
    // code to recieve an attack then send the 'hit' function or record a miss
  }

  return {
    board,
    placeShip,
    receiveAttack,
  };
}

function findEndPosition(shipLength, startPos, shipDirection) {
  // find the current position
  let xStartPos = startPos[1];
  // account for two digits for x=10
  if (startPos.length > 2) {
    xStartPos = "10";
  }
  const yStartPos = startPos[0];
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
    return Error("ship cannot be placed out of bounds");
  }

  const endPos = yEndPos + xEndPos.toString();
  return endPos;
}

module.exports = { Ship, Gameboard };
