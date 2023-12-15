import './style.css';
//  import Icon from './icon.png';
import GameBoard from './gameboard';
import Ship from './ship';

const board = new GameBoard('Player');
// let board2 = new GameBoard("Computer");
const ship1 = new Ship(5, 'vertical');
const ship2 = new Ship(4, 'horizontal');
const ship3 = new Ship(3, 'horizontal');
const ship4 = new Ship(2, 'horizontal');
const ship5 = new Ship(2, 'horizontal');
board.placeShipRandom(ship1);
board.placeShipRandom(ship2);
board.placeShipRandom(ship3);
board.placeShipRandom(ship4);
board.placeShipRandom(ship5);

console.log(board.board);
console.log(board.shipsLeft);
