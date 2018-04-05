/**************************************/
/* Treehouse Fullstack Techdegree     */
/* Project 4                          */
/* Jennifer Nordell                   */
/**************************************/

/********************/
/* Classes          */
/********************/

class Player {
    constructor(name, type, icon) {
        this.name = name;
        this.type = type;
        this.icon = icon;
    }
}

class Game {
    constructor() {
        this.gameOver = false;
        this.gameWinner = null;
        this.movesCount = 0;
        this.matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.player1 = new Player("Player 1", "human", `url("img/o.svg")`);
        this.player2 = new Player("Player 2", "human", `url("img/x.svg")`);
        this.activePlayer = this.player1;
    }

    swapPlayer() {
        if(this.activePlayer == this.player1) {
            this.activePlayer = this.player2;
        } else {
            this.activePlayer = this.player1;
        }
    }

    updateMatrix(id) {
        id = parseInt(id);
        let col = id % 3;
        let row = parseInt(id / 3);
        this.matrix[row][col] = game.activePlayer;
        console.log(this.matrix);
    }
}

class View {
    constructor(html, id) {
        this.html = html;
        this.id = id;
    }
 
    addHTML() {
        document.write(this.html);
    }
 
    toggleView() {
         let element = document.getElementById(this.id);
         element.style.display = element.style.display == "none" ? "block" : "none";
    }
 
    bindUIActions(element, eventType, action) {
        element.addEventListener(eventType, action);
    }
 
     unbindUIActions(element, eventType, action) {
         element.removeEventListener(eventType, action);
     }
 
     highlightPlayer(playerBox) {
         playerBox.classList.add("active");
     }
     
     unhighlightPlayer(playerBox) {
         playerBox.classList.remove("active");
     }
 }

/**********************/
/* Instances          */
/**********************/

let startView = new View(`
    <div class="screen screen-start" id="start">
        <header>
        <h1>Tic Tac Toe</h1>
        <a href="#" class="button" id="start-button">Start game</a>
        </header>
    </div>`, "start");

let gameView = new View(`
    <div class="board" id="board">
        <header>
        <h1>Tic Tac Toe</h1>
        <ul>
            <li class="players" id="player1">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg>
            </li>
            <li class="players" id="player2">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg>
            </li>
        </ul>
        </header>
        <ul class="boxes">
            <li class="box" id="0"></li>
            <li class="box" id="1"></li>
            <li class="box" id="2"></li>
            <li class="box" id="3"></li>
            <li class="box" id="4"></li>
            <li class="box" id="5"></li>
            <li class="box" id="6"></li>
            <li class="box" id="7"></li> 
            <li class="box" id="8"></li>
        </ul>
    </div>`, "board");

let finishView = new View(`
    <div class="screen screen-win" id="finish">
        <header>
            <h1>Tic Tac Toe</h1>
            <p class="message"></p>
            <a href="#" class="button">New game</a>
        </header>
    </div>`, "finish");



// Set up Views ...

startView.addHTML();
gameView.addHTML();
finishView.addHTML();

gameView.toggleView();
finishView.toggleView();


// Create game

let game = new Game();

// Constants for UI elements
const startButton = document.getElementById("start-button");
const playerOneBox = document.getElementById("player1");
const playerTwoBox = document.getElementById("player2");
const squares = document.getElementsByClassName("box");


startView.bindUIActions(startButton, "click", switchToGame);

function switchToGame() {
    startView.toggleView();
    gameView.toggleView();
    gameView.highlightPlayer(document.getElementById("player1"));
}


for(let square of squares) {
    gameView.bindUIActions(square, "mouseover", highlightBox);
    gameView.bindUIActions(square, "mouseout", clearHighlight);
    gameView.bindUIActions(square, "click", markSquare);
}

function markSquare(element) {
    game.activePlayer == game.player1 ? element.target.classList.add("box-filled-1") :element.target.classList.add("box-filled-2");
    game.activePlayer == game.player1 ? gameView.unhighlightPlayer(playerOneBox) : gameView.unhighlightPlayer(playerTwoBox);
    game.updateMatrix(element.target.id);
    game.swapPlayer();
    game.activePlayer == game.player1 ? gameView.highlightPlayer(playerOneBox) : gameView.highlightPlayer(playerTwoBox);
    element.target.style.pointerEvents ="none";
    game.movesCount++;
}

function highlightBox(element) {
    element.target.style.backgroundImage = game.activePlayer.icon;
}

function clearHighlight(element) {
    element.target.style.backgroundImage = "";
}

