export default class GameBoard {
    constructor(player) {
        this.board = this.createBoard();
        this.owner = player;
        this.shipsLeft = 0;
    }
    createBoard() {
        let grid = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(false);
            }

            grid.push(row);
        }
        return grid;
    }
    placeShip(ship, x, y) {
        if (x < 10 && x >= 0 && y < 10 && y >= 0) {
            if (ship.position === "vertical" && x + ship.length <= 10) { //up
                for (let i = 0; i < ship.length; i++) {
                    if (this.board[x + i][y] === false) {
                        this.board[x + i][y] = ship
                        ship.coords.push([x + i, y])
                        this.shipsLeft++
                    }
                }
                return
            }
            if (ship.position === "horizontal" && y + ship.length <= 10) { //left
                for (let i = 0; i < ship.length; i++) {
                    if (this.board[x][y + i] === false) {
                        this.board[x][y + i] = ship
                        ship.coords.push([x, y + i])
                        this.shipsLeft++
                    }
                }
                return
            }
        }
        return false
    }
    placeShipRandom(ship) {
        let isHorizontal = Math.random() < .5
        let shouldPlace = true;

        let randomX = Math.floor(Math.random() * 10)
        while (randomX + ship.length > 10) {
            randomX = Math.floor(Math.random() * 10)
        }
        if (randomX === 10) randomX--

        let randomY = Math.floor(Math.random() * 10)
        while (randomY + ship.length > 10) {
            randomY = Math.floor(Math.random() * 10)
        }
        if (randomY === 10) randomY--
        console.log(randomX, randomY)
        console.log(isHorizontal)
        if (isHorizontal) {
            ship.position = "horizontal"
            for (let i = 0; i < ship.length; i++) {
                if (this.board[randomX] && this.board[randomX][randomY + i] !== false) shouldPlace = false
            }
        } else {
            ship.position = "vertical"
            for (let i = 0; i < ship.length; i++) {
                if (this.board[randomX] && this.board[randomX + i][randomY] !== false) shouldPlace = false
            }
        }
        console.log("Should place " + shouldPlace)
        if (shouldPlace) {
            this.placeShip(ship, randomX, randomY)
            return
        } else {
            console.log("COULD NOT PLACE SHIP, TRY AGAIN")
            this.placeShipRandom(ship)
        }

    }
    receiveAttack(x, y) {
        if (this.board[x][y] !== false) {
            this.board[x][y].hit()
            this.shipsLeft--
        }
        this.board[x][y] = true
        if (this.shipsLeft === 0) return true //CHECK OR DELETE
    }
}