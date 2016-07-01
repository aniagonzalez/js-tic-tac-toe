
// What constitutes a turn?
// determine player turn
// select a space
//   space available?
// claim space using player identifier
// check win/loss/draw state
//   what is a win
//   what is a draw
//   what is a loss
//   communicate outcome
// continue play

// PLAYER object with X or O mark
// GAMEBOARD object with 3x3 grid
// GAME object
// a TURN is player1 or player2 placing mark on available spot
    //and checking IF WIN, else switch player for next turn
      //WIN can be determined by checking if players marks are in a winning spots combinations

// RENDER function that can show what the GAMEBOARD looks like

// GAME OVER when no more spots are available
function TicTacToe(player1, player2) {
  this._board = [[0,0,0], [0,0,0], [0,0,0]]
  this._player1 = player1 //even turn player => 1
  this._player2 = player2 //odd turn player => -1
  this._turn = 0

}

TicTacToe.prototype = {

  checkAvailable: function(currentPosition){
    return currentPosition === 0
  },

  play: function(selectedRow, selectedCol) {

    var currentPosition = this._board[selectedRow][selectedCol]

    console.log(currentPosition)

    if(this.checkAvailable(currentPosition)){
      if(this._turn % 2 == 0) {
        this._board[selectedRow][selectedCol] = 1
        var playerClass = "player1"
      } else {
        this._board[selectedRow][selectedCol] = -1
        var playerClass = "player2"
      }
      console.log("its yours!", currentPosition)
      console.log(this._board)


      this._turn ++
      return playerClass
    } else {
      console.log("already taken, try again!")
    }
  },

  checkWin: function() {
    
  }

}


$(document).on('ready', function() {

  var game = new TicTacToe("p1", "p2")

  var buttons = $(".tic-tac-toe button")

  buttons.on('click', function(event) {
    // console.log($(this))
    var selectedCol = $(this).data('col')
    var selectedRow = $(this).data('row')
    console.log("col:", selectedCol)
    console.log("row:", selectedRow)

    var colorClass = game.play(selectedRow, selectedCol)

    $(this).addClass(colorClass)

    //check if win?
    game.checkWin

  })

})
