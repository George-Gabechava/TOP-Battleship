const { Ship, Gameboard, Player } = require("./main");

function makeGrid(playerName) {
  game = Player(playerName);

  const boardPlayerUI = document.getElementById(`board${playerName}`);

  const boardUIP1 = game.playerBoard.board;
  const keysP1 = Object.keys(boardUIP1);
  const valuesP1 = Object.values(boardUIP1);

  for (let col = 0; col <= 10; col++) {
    // Create a cell element
    const colElement = document.createElement("div");
    // Add a class for styling
    colElement.classList.add("col");
    for (let row = 0; row < 10; row++) {
      // column number to alphabet forumla
      const numToAlph = String.fromCharCode(row + "A".charCodeAt(0));
      if (row == 0 && col == 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        // Append the cell to the col
        colElement.appendChild(cellElement);
        boardPlayerUI.appendChild(colElement);
      }

      if (row == 0 && col > 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        // Add some content to the cell
        cellElement.textContent = `${col}`;

        colElement.appendChild(cellElement);
        boardPlayerUI.appendChild(colElement);
      }
      if (col == 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        cellElement.textContent = `${numToAlph}`;

        colElement.appendChild(cellElement);
      }
      if (col > 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");

        // Set unique cell ID
        cellElement.id = `${numToAlph}${col}${playerName}`;

        colElement.appendChild(cellElement);
      }
    }
    // Append the col to the grid container
    boardPlayerUI.appendChild(colElement);
  }
}

// Start a game
let currentTurn;
function startGame() {
  makeGrid("P1");
  makeGrid("P2");
  currentTurn = "P1";
}

let Player1;
let Player2;

/// / Still need a way to 'clean' the cell classes
function newGame() {
  Player1 = Player("P1");
  Player2 = Player("P2");
}

startGame();
newGame();
// Set the current turn to the first player

// Make the cells interative
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Highlight or update the cell based on interaction
    const selectedCell = cell;
    takeShot(selectedCell);
  });
});

// check if the game is over once all ships are sunk
function checkGameOver(shotPlayer) {
  let shipsSunk = 0;
  for (let i = 0; i < 5; i++) {
    if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
      shipsSunk += 1;
    }
  }
  if (shipsSunk === 5) {
    // Game Over
    if (currentTurn === "P1") {
      console.log("Game over", "Player 1 has won!");
      // Change current turn to stop the game
      currentTurn = "";
    } else {
      console.log("Game over", "Player 2 has won!");
      currentTurn = "";
    }
  }
}

// Implement a take a shot interactive function
function takeShot(currentCell) {
  // Variables for shot location and shot player
  let shotCord;
  let shootPlayer;

  // If P1 / human turn
  if (currentCell) {
    const shotID = currentCell.id;
    // get coordinate & player
    shotCord = shotID.slice(0, 2);
    shootPlayer = shotID.slice(2);
    if (shotID.length > 4) {
      shotCord = shotID.slice(0, 3);
      shootPlayer = shotID.slice(3);
    }
  }

  if (currentTurn === "P1" && shootPlayer === "P2") {
    const shoot = Player2.playerBoard.receiveAttack(shotCord);
    console.log(shoot);

    if (shoot === "miss") {
      currentCell.classList.add("shotMissed");
      currentTurn = "P2";
      takeShot();
    }

    if (shoot === "hit") {
      currentCell.classList.add("shotHit");
      currentTurn = "P2";
      checkGameOver(Player2);
      takeShot();
    }
    return;
  }

  // If P2 / AI turn
  if (currentTurn === "P2") {
    // Get a coordinate to shoot
    const getTarget = Player2.AIshoot();
    console.log(getTarget);
    // Use that coordinate to shoot
    const shoot = Player1.playerBoard.receiveAttack(getTarget);

    // Update UI
    currentCell = document.getElementById(`${getTarget}P1`);
    if (shoot === "miss") {
      currentCell.classList.add("shotMissed");
      currentTurn = "P1";
    }

    if (shoot === "hit") {
      currentCell.classList.add("shotHit");
      currentTurn = "P1";
      checkGameOver(Player1);
    }
  }
}
