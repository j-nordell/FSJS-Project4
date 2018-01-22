class Game {
    constructor(playerOne, playerTwo) {
        this.gameOver = false;
        this.moves = 0;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.squares = document.getElementsByClassName("box");
        this.currentPlayer = playerOne;
    }

    pickRandomPlayer() {
        let randomNumber = Math.round(Math.random());
        if(randomNumber) {
            this.currentPlayer = playerTwo;
        } else {
            this.currentPlayer = playerOne;
        }
    }
}