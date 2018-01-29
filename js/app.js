/**************************************/
/* Treehouse Fullstack Techdegree     */
/* Project 4                          */
/* Jennifer Nordell                   */
/**************************************/

const startView = document.getElementById("start");
const boardView = document.getElementById("board");
const finishView = document.getElementById("finish");
const startButton = document.getElementById("start-button");
const squares = document.getElementsByClassName("box");

let gameOver = false;
let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

const oSVG = "img/o.svg";
const xSVG = "img/x.svg";

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player1Name = "Player 1";
let player2Name = "Player 2";
let activePlayer = player1;


let toggleView = (view) => {
    view.style.display = view.style.display == "none" ? "block" : "none";
};


let showGameBoard = () => {
    toggleView(startView);
    toggleView(boardView);
};

let pickRandomPlayer = () => {
    if(Math.random() < 0.5) {
        activePlayer = player1;
    } else {
        activePlayer = player2;
    }
    console.log(activePlayer);
};

// Event listeners and bindings

function bindUIActions(element, eventType, action) {
    element.addEventListener(eventType, action);
}

function unbindUIActions(element, eventType, action) {
    element.removeEventListener(eventType, action);
}

function highlightPlayer(player) {
    player.classList.add("active");
}

function unhighlightPlayer(player) {
    player.classList.remove("active");
}

function highlightBox(element) {
    element.target.style.backgroundImage = activePlayer == player1 ? `url(${oSVG})` : `url(${xSVG})`;
}

function clearHighlight(element) {
    element.target.style.backgroundImage = "";
}

function swapPlayer() {
    activePlayer = activePlayer == player1 ? player2 : player1;
}

function markSquare(element) {
    console.log("Hi!");
    if(activePlayer == player1) {
        element.target.classList.add("box-filled-1");
    } else {
        element.target.classList.add("box-filled-2");
    }
    unhighlightPlayer(activePlayer);
    swapPlayer();
    highlightPlayer(activePlayer);
    element.target.style.pointerEvents ="none";
}

bindUIActions(startButton, "click", showGameBoard);

for(let square of squares) {
    bindUIActions(square, "mouseover", highlightBox);
    bindUIActions(square, "mouseout", clearHighlight);
    bindUIActions(square, "click", markSquare);
}

// Set up new game

toggleView(boardView);
toggleView(finishView);
pickRandomPlayer();
highlightPlayer(activePlayer);
