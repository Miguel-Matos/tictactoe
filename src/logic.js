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
// const squares = (() => {
//   const tl = () => document.querySelector('#tl');
//   const tm = () => document.querySelector('#tm');
//   const tr = () => document.querySelector('#tr');
//   const ml = () => document.querySelector('#ml');
//   const mm = () => document.querySelector('#mm');
//   const mr = () => document.querySelector('#mr');
//   const bl = () => document.querySelector('#bl');
//   const bm = () => document.querySelector('#bm');
//   const br = () => document.querySelector('#br');
//   return {tl, tm, tr, ml, mm, mr, bl, bm, br};
// })();

// Module to keep track of variables
// that monitor state
const stateCheck = (() => {
  let pText = document.querySelector('#ptext');
  let p1Turn = true;
  return {pText, p1Turn}
})();


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

  // Find a way to swap out tl for any other div
  // squares.tl().addEventListener('click', () => {
  //   if (squares.tl().innerHTML === "") {
  //     if (p1Turn) {
  //       squares.tl().innerHTML = 'X';
  //       p1Turn = false;
  //       pturn.innerHTML = 'Player 2\'s turn'
  //     } else {
  //       squares.tl().innerHTML = 'O';
  //       p1Turn = true;
  //       pturn.innerHTML = 'Player 1\'s turn'
  //     };
  //   }
  // });
