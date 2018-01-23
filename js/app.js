/**************************************/
/* Treehouse Fullstack Techdegree     */
/* Project 4                          */
/* Jennifer Nordell                   */
/**************************************/

// Hi there, Benoit!  I'm going to show you how to do this
// Now I save my file
// See the 1 over there?  Let's press it
// hrmmm

const board = document.getElementById("board");
const startHTML = `<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button" id="start-button">Start game</a></header></div>`;
const winHTML = `<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>`;
let startView = new View(startHTML, "none", board);
let boardView = new View(board.innerHTML, "none", board);
let winView = new View(winHTML,"none", board);

let playerOne = new Player("Player 1", "human");
let playerTwo = new Player("Player 2", "human");

let game = new Game(playerOne, playerTwo);

let showStartView = function() {
    'use strict';
    startView.toggleDisplay(board);
    startView.renderInElement(board);
};

let showBoardView = function() {
    'use strict';
    boardView.toggleDisplay(board);
    boardView.renderInElement(board);
};

let showWinView = function() {
    'use strict';
    winView.toggleDisplay(board);
    winView.renderInElement(board);
};

showStartView();
let startButton = document.getElementById("start-button");
startView.bindUIActions(startButton, "click", showBoardView);
game.pickRandomPlayer();

console.log(game.currentPlayer);


