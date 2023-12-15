export default class Player {
    constructor(board, enemy) {
        this.turn = false;
        this.board = board;
        this.enemyBoard = enemy;
        //might add name;
    }
    computerPlay() {
        let randomX = Math.floor(Math.random() * 10)
        if (randomX === 10) randomX--
        let randomY = Math.floor(Math.random() * 10)
        if (randomY === 10) randomY--
        if (this.enemyBoard[randomX][randomY] !== true) {
            this.enemyBoard.receiveAttack(randomX, randomY)
        } else {
            this.computerPlay()
        }
    }
}