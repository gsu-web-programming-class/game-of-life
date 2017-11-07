/*
 * Make ALL js related changes in a .ts file, it gives extra features and is compiled down to a .js file. The .js files *ARE GENERATED* So
 * don't modify the .js files, as your changes *WILL BE LOST* :P
 *
 * Let me know if you have ANY questions or would rather do something else! :)
 */


import { Cell } from "./Cell";
import { Grid } from "./Grid";

const MAX_SIZE  = 2001;
const CELL_SIZE = 10;
const MAX_CELLS = MAX_SIZE / CELL_SIZE;

let W: number, H: number;
let CELLS_X: number, CELLS_Y: number;
// let canvas: HTMLCanvasElement;
// let ctx: CanvasRenderingContext2D;
const grid: Grid = new Grid(MAX_CELLS, CELL_SIZE);


function refreshSize() {
    let docBody = document.body;
    W           = Math.min(docBody.clientWidth, MAX_SIZE);
    H           = Math.min(docBody.clientHeight, MAX_SIZE);

    grid.setSize(W, H);

    CELLS_X = W / CELL_SIZE;
    CELLS_Y = H / CELL_SIZE;
}


window.onresize = () => {
    refreshSize();
    drawGrid();
};

window.onload = () => {
    grid.setCanvas(document.querySelector("canvas"));

    refreshSize();
    initCells();
    drawGrid();
};


function updateCells() {

}


function initCells() {
    grid.clear();

    [
        Cell.of(1, 5), Cell.of(1, 6), Cell.of(2, 5), Cell.of(2, 6), Cell.of(11, 5), Cell.of(11, 6), Cell.of(11, 7), Cell.of(12, 4),
        Cell.of(12, 8), Cell.of(13, 3), Cell.of(13, 9), Cell.of(14, 3), Cell.of(14, 9), Cell.of(15, 6), Cell.of(16, 4), Cell.of(16, 8),
        Cell.of(17, 5), Cell.of(17, 6), Cell.of(17, 7), Cell.of(18, 6), Cell.of(21, 3), Cell.of(21, 4), Cell.of(21, 5), Cell.of(22, 3),
        Cell.of(22, 4), Cell.of(22, 5), Cell.of(23, 2), Cell.of(23, 6), Cell.of(25, 1), Cell.of(25, 2), Cell.of(25, 6), Cell.of(25, 7),
        Cell.of(35, 3), Cell.of(35, 4), Cell.of(36, 3), Cell.of(36, 4),
    ].forEach(cell => grid.revive(cell));

    updateCells();
}


function drawGrid() {
    grid.draw();
}