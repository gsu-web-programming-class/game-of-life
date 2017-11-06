var step = 10;
var W, H;
var canvas;
var ctx;
function refreshSize() {
    canvas.width = W = document.body.clientWidth;
    canvas.height = H = document.body.clientHeight;
    drawGrid(ctx, W, H, step);
}
window.onresize = function () {
    refreshSize();
};
window.onload = function () {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    refreshSize();
};
var drawGrid = function (ctx, w, h, step) {
    ctx.beginPath();
    for (var x = 0; x <= w; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }
    // @hpatel: I made color changes, feel free to revert that. Just thought it looked better? Remove this once you see it
    ctx.strokeStyle = "#d7d7d7";
    ctx.stroke();
    ctx.beginPath();
    for (var y = 0; y <= h; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }
    // @hpatel: I made color changes, feel free to revert that. Just thought it looked better? Remove this once you see it
    ctx.strokeStyle = "#d7d7d7";
    ctx.stroke();
};
//# sourceMappingURL=main.js.map