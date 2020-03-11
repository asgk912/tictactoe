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

  checkBoard(r, c) {
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
      if(this.board[i][c] !== this.turn) return farlse;
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

game.printBoard();