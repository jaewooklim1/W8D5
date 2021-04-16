class Board {
  constructor() {
    this.grid = new Array(
      new Array("[ ]","[ ]","[ ]"),
      new Array("[ ]","[ ]","[ ]"),
      new Array("[ ]","[ ]","[ ]")
    );
  }

  printBoard() {
    let topRow = `  ${[...Array(this.grid.length).keys()].join("  ")}`;
    console.log(topRow);
    for(let i = 0; i < this.grid.length; i++) {
      console.log(`${i}${this.grid[i].join("")}`);    
    }
  }

  placeMark(pos, mark) {
    let [x, y] = pos;
    this.grid[x][y] = `[${mark}]`;
  }

  rowWinner() {

  }
}

let board = new Board();