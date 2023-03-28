const board = (() => {
  let gameBoard = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push('X');
    }
    gameBoard.push(row);
  }

  const test = () => console.log(gameBoard);
  return {test};
})();

const character = (player, symbol) => {
  return {player, symbol};
};

const p1 = character("Player 1", "X");
const p2 = character("Player 2", "O");