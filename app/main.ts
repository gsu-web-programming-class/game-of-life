/*
 * Make ALL js related changes in a .ts file, it gives extra features and is compiled down to a .js file. The .js files *ARE GENERATED* So
 * don't modify the .js files, as your changes *WILL BE LOST* :P
 *
 * Let me know if you have ANY questions or would rather do something else! :)
 */


const step = 10;

let W: number, H: number;
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;


function refreshSize() {
    canvas.width = W = document.body.clientWidth;
    canvas.height = H = document.body.clientHeight;

    drawGrid(ctx, W, H, step);
}


window.onresize = () => {
    refreshSize();
};

window.onload = () => {
    canvas = document.querySelector("canvas");
    ctx    = canvas.getContext("2d");

    refreshSize();
};

const drawGrid = function ( ctx, w, h, step ) {
    ctx.beginPath();
    for ( let x = 0; x <= w; x += step ) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }

    // @hpatel: I made color changes, feel free to revert that. Just thought it looked better? Remove this once you see it
    ctx.strokeStyle = "#d7d7d7";
    ctx.stroke();
    ctx.beginPath();

    for ( let y = 0; y <= h; y += step ) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }

    // @hpatel: I made color changes, feel free to revert that. Just thought it looked better? Remove this once you see it
    ctx.strokeStyle = "#d7d7d7";
    ctx.stroke();
};