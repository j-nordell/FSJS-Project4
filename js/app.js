/**************************************/
/* Treehouse Fullstack Techdegree     */
/* Project 4                          */
/* Jennifer Nordell                   */
/**************************************/

const board = document.getElementById("board");
const startHTML = `<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>`;
let startView = new View(startHTML, "none", board);

let startGame = () => {
    startView.toggleDisplay(board);
    startView.renderInElement(board);
}

startGame();




