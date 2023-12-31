export default class Ship {
    constructor(length, pos) {
        this.length = length;
        this.position = pos;
        this.hits = 0;
        this.sunk = false;
        this.coords = [];
    }
    hit() {
        this.hits += 1;
        this.isSunk();
    }
    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }
}
