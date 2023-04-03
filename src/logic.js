const board = (() => {
  let gameBoard = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push('A');
    }
    gameBoard.push(row);
  }
  const test = () => console.log(gameBoard);
  return {test, gameBoard};
})();

// board.test();

const checker = (() => {
  let gameEnd = false;
  const solution = [['X', 'X', 'X'], ['O', 'O', 'O']];
  const check = () => {
    console.log(board.gameBoard[0]);
    console.log(solution[0]);
    if (JSON.stringify(board.gameBoard[0]) === JSON.stringify(solution[0])) {
      console.log('test');
    }
  }
  return {check};
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
  const selected = (num1, num2) => {
    document.querySelector(id).addEventListener('click', () => {
      if (document.querySelector(id).innerHTML === "") {
        if (stateCheck.p1Turn) {
          document.querySelector(id).innerHTML = 'X';
          stateCheck.p1Turn = false;
          board.gameBoard[num1][num2] = 'X'
          // console.log(board.gameBoard);
          checker.check();
          stateCheck.pText.innerHTML = 'Player 2\'s turn';
        } else {
          document.querySelector(id).innerHTML = 'O';
          stateCheck.p1Turn = true;
          board.gameBoard[num1][num2] = 'O'
          // console.log(board.gameBoard);
          checker.check();
          stateCheck.pText.innerHTML = 'Player 1\'s turn';
        };
      };
    });
  };
  return {selected};
};

// Creates objects from the queryAdder constructor
const squareCaller = (() => {
  const tl = queryAdder('#tl');
  tl.selected(0, 0);
  const tm = queryAdder('#tm');
  tm.selected(0, 1);
  const tr = queryAdder('#tr');
  tr.selected(0, 2);
  const ml = queryAdder('#ml');
  ml.selected(1, 0);
  const mm = queryAdder('#mm');
  mm.selected(1, 1);
  const mr = queryAdder('#mr');
  mr.selected(1, 2);
  const bl = queryAdder('#bl');
  bl.selected(2, 0);
  const bm = queryAdder('#bm');
  bm.selected(2, 1);
  const br = queryAdder('#br');
  br.selected(2, 2);
})();
