/*
 * Make ALL js related changes in a .ts file, it gives extra features and is compiled down to a .js file. The .js files *ARE GENERATED* So
 * don't modify the .js files, as your changes *WILL BE LOST* :P
 *
 * Let me know if you have ANY questions or would rather do something else! :)
 */


import { Grid } from "./Grid";
import { Patterns } from "./Patterns";

const MAX_SIZE  = 2000;
const CELL_SIZE = 10;
const MAX_CELLS = MAX_SIZE / CELL_SIZE;

let W: number, H: number;
let CELLS_X: number, CELLS_Y: number;
const grid: Grid = new Grid(MAX_CELLS, CELL_SIZE);


function refreshSize() {
    let docBody = document.body;
    W           = Math.min(docBody.clientWidth, MAX_SIZE);
    H           = Math.min(docBody.clientHeight, MAX_SIZE);

    grid.setSize(W, H);

    CELLS_X = Math.round(W / CELL_SIZE);
    CELLS_Y = Math.round(H / CELL_SIZE);
}


window.onresize = () => {
    refreshSize();
    this.drawGrid();
};


function gameStart() {
    grid.start();
    document.querySelector("#play-icon").setAttribute("hidden", null);
    document.querySelector("#pause-icon").removeAttribute("hidden");
    const playPauseLabel: HTMLElement = document.getElementById("playPauseLabel");
    playPauseLabel.innerText          = "Pause";
}


function gameStop() {
    grid.stop();
    document.querySelector("#pause-icon").setAttribute("hidden", null);
    document.querySelector("#play-icon").removeAttribute("hidden");
    const playPauseLabel: HTMLElement = document.getElementById("playPauseLabel");
    playPauseLabel.innerText          = "Play";
}


window.onload = () => {
    grid.setCanvas(document.querySelector("canvas"));

    grid.canvas.onclick                         = () => {
        grid.step();
    };
    document.getElementById("clearBtn").onclick = () => {
        grid.clear();
        grid.draw();
        gameStop();
    };

    document.getElementById("playPause").onclick = () => {
        if ( grid.isPlaying ) {
            gameStop();
        } else {
            gameStart();
        }
    };

    refreshSize();
    initCells();
    grid.draw();
    gameStop();
};


function initCells() {
    grid.clear();

    // 766px X 502px
    // 879px X 659px
    Patterns.getGliderGuns(CELLS_X, CELLS_Y).forEach(cell => grid.revive(cell));

    // Patterns.hBar(CELLS_X, CELLS_Y).forEach(cell => grid.revive(cell));
}