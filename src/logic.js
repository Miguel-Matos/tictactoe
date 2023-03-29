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

// Consider converting to factory and making
// it return one at a time
// For now this is less code so it stays
const squares = (() => {
  const tl = () => document.querySelector('#tl');
  const tm = () => document.querySelector('#tm');
  const tr = () => document.querySelector('#tr');
  const ml = () => document.querySelector('#ml');
  const mm = () => document.querySelector('#mm');
  const mr = () => document.querySelector('#mr');
  const bl = () => document.querySelector('#bl');
  const bm = () => document.querySelector('#bm');
  const br = () => document.querySelector('#br');
  return {tl, tm, tr, ml, mm, mr, bl, bm, br};
})();

// Find a way to swap out tl for any other div
squares.tl().addEventListener('click', (e) => {
  squares.tl().innerHTML += 'X';
});