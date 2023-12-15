import GameBoard from "../gameboard";

describe("test for GameBoard class", () => {
    test("Must return the gameBoard", () => {
        const game = new GameBoard("player1");
        const board = game.createBoard();
        expect(board).toHaveLength(10);

        board.forEach(element => {
            expect(element).toHaveLength(10);
        });
    });


});