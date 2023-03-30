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

// Works fine without
// Debating on whether to implement or not

// const character = (player, symbol) => {
//   return {player, symbol};
// };

// Module to keep track of variables
// that monitor state
const stateCheck = (() => {
  let pText = document.querySelector('#ptext');
  let p1Turn = true;
  return {pText, p1Turn}
})();

// Adds X and O to the board
// Updates text above the board
const queryAdder = (id) => {
  const selected = () => {
    document.querySelector(id).addEventListener('click', () => {
      if (document.querySelector(id).innerHTML === "") {
        if (stateCheck.p1Turn) {
          document.querySelector(id).innerHTML = 'X';
          stateCheck.p1Turn = false;
          stateCheck.pText.innerHTML = 'Player 2\'s turn';
        } else {
          document.querySelector(id).innerHTML = 'O';
          stateCheck.p1Turn = true;
          stateCheck.pText.innerHTML = 'Player 1\'s turn';
        };
      };
    });
  };
  return {selected};
};

const squareCaller = (() => {
  const tl = queryAdder('#tl');
  tl.selected();
  const tm = queryAdder('#tm');
  tm.selected();
  const tr = queryAdder('#tr');
  tr.selected();
  const ml = queryAdder('#ml');
  ml.selected();
  const mm = queryAdder('#mm');
  mm.selected();
  const mr = queryAdder('#mr');
  mr.selected();
  const bl = queryAdder('#bl');
  bl.selected();
  const bm = queryAdder('#bm');
  bm.selected();
  const br = queryAdder('#br');
  br.selected();
})();