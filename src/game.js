const { Ship, Gameboard, Player } = require("./main");

let game = Player();

function startNewGame(playerName) {
  game = Player(playerName);

  const boardPlayerUI = document.getElementById(`board${playerName}`);

  const boardUIP1 = game.player1Board.board;
  const keysP1 = Object.keys(boardUIP1);
  const valuesP1 = Object.values(boardUIP1);

  for (let col = 0; col <= 10; col++) {
    const colElement = document.createElement("div");
    colElement.classList.add("col"); // Add a class for styling
    for (let row = 0; row < 10; row++) {
      // column number to alphabet forumla
      const numToAlph = String.fromCharCode(row + "A".charCodeAt(0));
      if (row == 0 && col == 0) {
        // Create a cell element
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel"); // Add a class for styling

        // Append the cell to the col
        colElement.appendChild(cellElement);
        boardPlayerUI.appendChild(colElement);
      }

      if (row == 0 && col > 0) {
        // Create a cell element
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel"); // Add a class for styling

        // Add some content to the cell
        cellElement.textContent = `${col}`;

        // Append the cell to the col
        colElement.appendChild(cellElement);
        boardPlayerUI.appendChild(colElement);
      }
      if (col == 0) {
        // Create a cell element
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel"); // Add a class for styling

        // Add some content to the cell
        cellElement.textContent = `${numToAlph}`;

        // Append the cell to the col
        colElement.appendChild(cellElement);
      }
      if (col > 0) {
        // Create a cell element
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell"); // Add a class for styling

        // Set unique cell ID
        cellElement.id = `${numToAlph}${col}${playerName}`;

        // Append the cell to the col
        colElement.appendChild(cellElement);
      }
    }
    // Append the col to the grid container
    boardPlayerUI.appendChild(colElement);
  }
}

startNewGame("P1");
startNewGame("P2");
