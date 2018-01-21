/**************************************/
/* Treehouse Fullstack Techdegree     */
/* Project 4                          */
/* Jennifer Nordell                   */
/**************************************/

const board = document.getElementById("board");
const startHTML = `<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button" id="start-button">Start game</a></header></div>`;
const winHTML = `<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>`;
let startView = new View(startHTML, "none", board);
let boardView = new View(board.innerHTML, "none", board);
let winView = new View(winHTML,"none", board)

//let playerOne = new Player("Player 1");
//let playerTwo = new Player("Player 2");

let showStartView = () => {
    startView.toggleDisplay(board);
    startView.renderInElement(board);
}

let showBoardView = () => {
    boardView.toggleDisplay(board);
    boardView.renderInElement(board);
}

let showWinView = () => {
    winView.toggleDisplay(board);
    winView.renderInElement(board);
}

showStartView();
let startButton = document.getElementById("start-button");
startView.bindUIActions(startButton, "click", showBoardView);





