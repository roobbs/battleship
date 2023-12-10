import './style.css';
//import Icon from './icon.png';
import GameBoard from './gameboard';
import Ship from './ship';

let board = new GameBoard("Player");
// let board2 = new GameBoard("Computer");
let ship1 = new Ship(5, "vertical");
let ship2 = new Ship(4, "horizontal")
let ship3 = new Ship(3, "horizontal")
let ship4 = new Ship(2, "horizontal")
let ship5 = new Ship(2, "horizontal")
board.placeShipRandom(ship1)
board.placeShipRandom(ship2)
board.placeShipRandom(ship3)
board.placeShipRandom(ship4)
board.placeShipRandom(ship5)

// console.log(board.board[0][8].hits) //undefined bc ship is deleted
// console.log(ship1.hits);
// console.log(ship1.sunk);


console.log(board.board)
console.log(board.shipsLeft)
// board.receiveAttack(2, 6)
// board.receiveAttack(4, 6)
