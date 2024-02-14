const { Ship, Gameboard, Player } = require("./main");

function startNewGame(playerName) {
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

// Start a new game
function newGame() {
  startNewGame("P1");
  startNewGame("P2");
}
newGame();

const Player1 = Player("P1");
const Player2 = Player("P2");

// Set the current turn to the first player
let currentTurn = "P1";

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
  console.log(shotPlayer);
  let shipsSunk = 0;
  for (let i = 0; i < 5; i++) {
    console.log(shotPlayer.playerBoard.playerShips[i]);
    if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
      shipsSunk += 1;
    }
  }
  console.log(shipsSunk);
  if (shipsSunk === 5) {
    // Game Over
    if (currentTurn === "P1") {
      console.log("Game over", "Player 1 has won!");
    } else {
      console.log("Game over", "Player 2 has won!");
    }
  }
}

// Implement a take a shot interactive function
function takeShot(currentCell) {
  // If P1 / human turn
  let shotCord;
  let shootPlayer;
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

  // If P1 turn
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
      checkGameOver(Player2);
      currentTurn = "P2";
      takeShot();
    }
    return;
  }

  // If P2 / AI turn
  if (currentTurn === "P2") {
    const shoot = Player2.AIshoot();
    console.log(shoot);
    currentCell = `${shoot}P2`;

    if (shoot === "miss") {
      currentCell.classList.add("shotMissed");
      currentTurn = "P1";
    }

    if (shoot === "hit") {
      currentCell.classList.add("shotHit");
      checkGameOver(Player1);
      currentTurn = "P1";
    }
  }
}
