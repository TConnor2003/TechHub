//create max score, current score, and game over variables
var maxScore = 0;
var currentScore = 0;
var gameOver = false;
//create a 4x4 array of 0's in div #gameboard and print it to html
var gameBoard = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var gameBoardHTML = "";
for (var i = 0; i < gameBoard.length; i++) {
    gameBoardHTML += "<div class='row'>";
    for (var j = 0; j < gameBoard[i].length; j++) {
        gameBoardHTML += "<div class='col-xs-3 tile' id='" + i + "-" + j + "'></div>";
    }
    gameBoardHTML += "</div>";
}
$("#gameboard").html(gameBoardHTML);
//create a function to generate a random number between 0 and 3

