const { Ship, Gameboard, Player } = require("./main");

// Function to create the UI for gameplay
function makeGrid(player) {
  const currentName = player.Name;

  const boardPlayerUI = document.getElementById(`board${currentName}`);

  const boardUI = player.playerBoard.board;
  // Note to self, If I need to seperate keys and values, use:
  // const keysP1 = Object.keys(boardUI);
  // const valuesP1 = Object.values(boardUI);

  for (let col = 0; col <= 10; col++) {
    // Create a cell element
    const colElement = document.createElement("div");
    // Add a class for styling
    colElement.classList.add("col");
    for (let row = 0; row < 10; row++) {
      // column number to alphabet forumla
      const numToAlph = String.fromCharCode(row + "A".charCodeAt(0));
      if (row === 0 && col === 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        // Append the cell to the col
        colElement.appendChild(cellElement);
        boardPlayerUI.appendChild(colElement);
      }

      if (row === 0 && col > 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        // Add some content to the cell
        cellElement.textContent = `${col}`;

        colElement.appendChild(cellElement);
        boardPlayerUI.appendChild(colElement);
      }
      if (col === 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        cellElement.textContent = `${numToAlph}`;

        colElement.appendChild(cellElement);
      }
      if (col > 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");

        // Set unique cell ID
        cellElement.id = `${numToAlph}${col}${currentName}`;

        const currentCell = `${numToAlph}${col}`;

        // Check if current cell contains a ship & change its color
        if (currentName === "P1" && boardUI[currentCell] === "unhit ship") {
          cellElement.classList.add("containsShip");
        }

        colElement.appendChild(cellElement);
      }
    }
    // Append the col to the grid container
    boardPlayerUI.appendChild(colElement);
  }
}

// Start a game
let currentTurn;
let P1;
let P2;

function startGame() {
  P1 = Player("P1");
  P2 = Player("P2");
  makeGrid(P1);
  makeGrid(P2);

  currentTurn = "P1";
}

// Make the cells interative
let cells;
function enableInteraction() {
  cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      // Highlight or update the cell based on interaction
      const selectedCell = cell;
      takeShot(selectedCell);
    });
  });
}
startGame();
enableInteraction();

// Display winner status
const gameStatusMessage = document.getElementById("gameStatus");

// check if the game is over once all ships are sunk
function checkGameOver(shotPlayer) {
  let shipsSunk = 0;
  for (let i = 0; i < 5; i++) {
    if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
      shipsSunk += 1;
    }
  }
  // Game Over message once all ships of a player are sunk
  if (shipsSunk === 5) {
    if (currentTurn === "P1") {
      gameStatusMessage.textContent = "Game over! Player 2 has won!";

      // Change current turn to stop the game
      currentTurn = "";
    } else {
      gameStatusMessage.textContent = "Game over! Player 1 has won!";
      currentTurn = "";
    }
  }
}

// Update ship sunk indicator
function checkUpdateShipUI(shotPlayer) {
  // Player 1 ship sunk legend
  if (shotPlayer.Name === "P1") {
    for (let i = 0; i < 5; i++) {
      if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
        if (i === 0) {
          const ship0P1UI = document.getElementById("ship0P1");
          ship0P1UI.classList.remove("shipSunkUI");
          ship0P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 1) {
          const ship1P1UI = document.getElementById("ship1P1");
          ship1P1UI.classList.remove("shipSunkUI");
          ship1P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 2) {
          const ship2P1UI = document.getElementById("ship2P1");
          ship2P1UI.classList.remove("shipSunkUI");
          ship2P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 3) {
          const ship3P1UI = document.getElementById("ship3P1");
          ship3P1UI.classList.remove("shipSunkUI");
          ship3P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 4) {
          const ship4P1UI = document.getElementById("ship4P1");
          ship4P1UI.classList.remove("shipSunkUI");
          ship4P1UI.classList.add("shipSunkUIisSunk");
        }
      }
    }
  }

  // Player 2 ship sunk legend
  if (shotPlayer.Name === "P2") {
    for (let i = 0; i < 5; i++) {
      if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
        if (i === 0) {
          const ship0P1UI = document.getElementById("ship0P2");
          ship0P1UI.classList.remove("shipSunkUI");
          ship0P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 1) {
          const ship1P2UI = document.getElementById("ship1P2");
          ship1P2UI.classList.remove("shipSunkUI");
          ship1P2UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 2) {
          const ship2P2UI = document.getElementById("ship2P2");
          ship2P2UI.classList.remove("shipSunkUI");
          ship2P2UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 3) {
          const ship3P2UI = document.getElementById("ship3P2");
          ship3P2UI.classList.remove("shipSunkUI");
          ship3P2UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 4) {
          const ship4P2UI = document.getElementById("ship4P2");
          ship4P2UI.classList.remove("shipSunkUI");
          ship4P2UI.classList.add("shipSunkUIisSunk");
        }
      }
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
    const shoot = P2.playerBoard.receiveAttack(shotCord);

    if (shoot === "miss") {
      currentCell.classList.add("shotMissed");
      currentTurn = "P2";
      takeShot();
    }

    if (shoot === "hit") {
      currentCell.classList.remove("containsShip");
      currentCell.classList.add("shotHit");
      currentTurn = "P2";
      checkUpdateShipUI(P2);
      checkGameOver(P2);
      takeShot();
    }
    return;
  }

  // If P2 / AI turn
  if (currentTurn === "P2") {
    // Get a coordinate to shoot
    const getTarget = P2.AIshoot();
    // Use that coordinate to shoot
    const shoot = P1.playerBoard.receiveAttack(getTarget);

    // Update UI
    currentCell = document.getElementById(`${getTarget}P1`);
    if (shoot === "miss") {
      currentCell.classList.add("shotMissed");
      currentTurn = "P1";
    }

    if (shoot === "hit") {
      currentCell.classList.add("shotHit");
      currentTurn = "P1";
      checkUpdateShipUI(P1);
      checkGameOver(P1);
    }
  }
}

// New Game, refresh all UI clases
const newGameButton = document.getElementById("buttonNew");
const sunkUI = document.querySelectorAll(".shipSunkUI");
newGameButton.addEventListener("click", () => {
  const boardP1UI = document.getElementById("boardP1");
  while (boardP1UI.hasChildNodes()) boardP1UI.removeChild(boardP1UI.firstChild);

  const boardP2UI = document.getElementById("boardP2");
  while (boardP2UI.hasChildNodes()) boardP2UI.removeChild(boardP2UI.firstChild);

  cells.forEach((cell) => {
    cell.classList.remove("shipSunkUI");
  });

  sunkUI.forEach((UIelement) => {
    UIelement.classList.remove("shipSunkUIisSunk");
  });

  P1 = Player("P1");
  makeGrid(P1);
  P2 = Player("P2");
  makeGrid(P2);

  currentTurn = "P1";
  gameStatusMessage.textContent = "The game is in progress.";

  enableInteraction();
});
