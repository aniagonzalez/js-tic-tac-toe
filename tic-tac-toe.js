
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
function TicTacToe() {
  this.board = [[0,0,0], [0,0,0], [0,0,0]]

}

TicTacToe.prototype.play = function(selectedCol, selectedRow) {
  //
  console.log(this.board[selectedRow][selectedCol])
}

function Player() {

}


$(document).on('ready', function() {

  var game = new TicTacToe

  var buttons = $(".tic-tac-toe button")

  buttons.on('click', function(event) {
    // console.log($(this))
    var selectedCol = $(this).data('col')
    var selectedRow = $(this).data('row')
    console.log("col:", selectedCol)
    console.log("row:", selectedRow)
    game.play(selectedCol, selectedRow)
  })

})
