// Module to keep track of variables
// that monitor state
const stateCheck = (() => {
  let pText = document.querySelector('#ptext');
  let p1Turn = true;
  let gameEnd = false;
  let winner = '';
  let counter = 0;
  return {pText, p1Turn, gameEnd, winner, counter}
})();


// Makes arrays to monitor game progress
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

// first implementation through brute force
const checker = (() => {
  const solution = ['XXX', 'OOO'];
  const check = () => {

    //checks rows and columns
    for (let i = 0; i < 3; i++) {
        let row = board.gameBoard[i][0] + board.gameBoard[i][1] + board.gameBoard[i][2];
        let col = board.gameBoard[0][i] + board.gameBoard[1][i] + board.gameBoard[2][i];
        if (row === solution[0] || col === solution[0]) {
          stateCheck.gameEnd = true;
          stateCheck.winner = 'Player 1 Wins!';
        } else if (row === solution[1] || col === solution[1]) {
          stateCheck.gameEnd = true;
          stateCheck.winner = 'Player 2 Wins!';
        }
    }

    //checks diagonal
      let diagA = board.gameBoard[0][0] + board.gameBoard[1][1] + board.gameBoard[2][2];
      let diagB = board.gameBoard[0][2] + board.gameBoard[1][1] + board.gameBoard[2][0];
      if (diagA === solution[0] || diagB === solution[0]) {
        stateCheck.gameEnd = true;
        stateCheck.winner = 'Player 1 Wins!';
      } else if (diagA === solution[1] || diagB === solution[1]) {
        stateCheck.gameEnd = true;
        stateCheck.winner = 'Player 2 Wins!';
      }

  }
  return {check};
})();

// Adds X and O to the board
// Updates text above the board
const queryAdder = (id) => {
  const selected = (num1, num2) => {

    function updater() {
      checker.check();
      stateCheck.counter++;
      if (stateCheck.counter === 9) {
        stateCheck.gameEnd = true;
      }
    };

    document.querySelector(id).addEventListener('click', () => {
      if (stateCheck.gameEnd === false && document.querySelector(id).innerHTML === "") {
        if (stateCheck.p1Turn) {
          document.querySelector(id).innerHTML = 'X';
          stateCheck.p1Turn = false;
          board.gameBoard[num1][num2] = 'X'
          updater();
          stateCheck.pText.innerHTML = 'Player 2\'s turn';
        } else {
          document.querySelector(id).innerHTML = 'O';
          stateCheck.p1Turn = true;
          board.gameBoard[num1][num2] = 'O'
          updater();
          stateCheck.pText.innerHTML = 'Player 1\'s turn';
        };
        if (stateCheck.gameEnd === true) {
          if (stateCheck.counter === 9 ){
            stateCheck.pText.innerHTML = 'Tie!';
          } else {
            stateCheck.pText.innerHTML = stateCheck.winner;
          }
          newGame.again.hidden = false;
        }
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

// Resets the game
const newGame = (() => {
  const again = document.querySelector('#again');
  again.hidden = true;
  function reset() {
    stateCheck.gameEnd = false;
    board.gameBoard = [['A', 'A', 'A'], ['A', 'A', 'A'], ['A', 'A', 'A']];
    document.querySelector('#tl').innerHTML = '';
    document.querySelector('#tm').innerHTML = '';
    document.querySelector('#tr').innerHTML = '';
    document.querySelector('#ml').innerHTML = '';
    document.querySelector('#mm').innerHTML = '';
    document.querySelector('#mr').innerHTML = '';
    document.querySelector('#bl').innerHTML = '';
    document.querySelector('#bm').innerHTML = '';
    document.querySelector('#br').innerHTML = '';
    stateCheck.pText.innerHTML = "Player 1's Turn";
    stateCheck.counter = 0;
  }
  again.addEventListener('click', () => {
    reset();
    again.hidden = true;
  })
  return {again};
})();
