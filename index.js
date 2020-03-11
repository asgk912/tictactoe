class TicTacToe {
  constructor() {
    this.turn = 'O';
    this.clicked = 0;
    this.board = this.createBoard();
  }

  place(r,c) {
    this.board[r][c] = this.turn;
  }

  createBoard() {
    return [Array(3).fill(' '), Array(3).fill(' '), Array(3).fill(' ')];
  }

  winOrLose(r, c) {
    console.log(this.checkRow(r));
    console.log(this.checkColumn(c));
    console.log(this.checkMajorDiagonal());
    console.log(this.checkMinorDiagonal());
    return (this.checkRow(r) || this.checkColumn(c) || this.checkMajorDiagonal() || this.checkMinorDiagonal())
  }

  checkRow(r) {
    for(var j=0; j<3; j++) {
      if(this.board[r][j] !== this.turn) return false;
    }
    return true;
  }

  checkColumn(c) {
    for(var i=0; i<3; i++) {
      if(this.board[i][c] !== this.turn) return false;
    }
    return true;
  }

  checkMajorDiagonal() {
    for(var index of [[0,0], [1,1], [2,2]]) {
      if(this.board[index[0]][index[1]] !== this.turn) return false;
    }
    return true;
  }

  checkMinorDiagonal() {
    for(var index of [[2,0], [1,1], [0,2]]) {
      if(this.board[index[0]][index[1]] !== this.turn) return false;
    }
    return true;
  }

  checkEndorChangeTurn() {
    var endCall = true;
    if(test) {

    } else {
      this.turn = (this.turn === 'O') ? 'X' : 'O';
    }
  }

  printBoard() {
    console.log([' ',' ',' ',' '].join('-'))
    for(var i=0; i<3; i++) {
      console.log('|' + this.board[i].join('|') + '|');
      console.log([' ',' ',' ',' '].join('-'));
    }
  }
}

var game = new TicTacToe();


/* Test if check methods work
console.log('CHECK Row');
game.board = [
  [' ', ' ', 'X'],
  ['O', 'O', 'O'],
  [' ', 'X', ' ']
]
game.printBoard();
game.turn = 'O';
game.winOrLose(1,1);

game.board = [
  ['X', 'X', 'X'],
  ['O', ' ', 'O'],
  [' ', 'O', ' ']
]
game.printBoard();
game.turn = 'X';
game.winOrLose(0,2);

console.log('CHECK: Column');
game.board = [
  [' ', 'O', 'X'],
  [' ', 'O', 'X'],
  [' ', 'O', ' ']
]
game.turn = 'O';
game.printBoard();
game.winOrLose(2,1);

console.log('CHECK: Main Diagonal');
game.board = [
  ['O', ' ', 'X'],
  [' ', 'O', 'X'],
  [' ', ' ', 'O']
]
game.turn = 'O';
game.printBoard();
game.winOrLose(2,2);

console.log('CHECK: Minor Diagonal');
game.board = [
  ['O', ' ', 'X'],
  [' ', 'X', 'X'],
  ['X', 'O', 'O']
]
game.turn = 'X';
game.printBoard();
game.winOrLose(0,2);
*/