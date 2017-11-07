/**
 * Created by joshuaking on 11/7/17.
 */
import { Cell } from "./Cell";

export class Grid {
    private _cellSize: number;
    private _height: number;
    private _maxCells: number;
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _width: number;


    constructor( maxCells: number, cellSize: number ) {
        this._maxCells = maxCells;
        this._cellSize = cellSize;
    }


    private _cells: Cell[] = [];


    get cells(): Cell[] {
        return this._cells;
    }


    public clear() {
        this.cells.forEach(cell => this.kill(cell));
    }


    public revive( cell: Cell ) {
        this.cells.push(cell);
    }


    public kill( cell: Cell ) {
        this._cells.splice(this._cells.indexOf(cell));
    }


    public setCanvas( canvas: HTMLCanvasElement ) {
        this._canvas = canvas;
        this._ctx    = canvas.getContext("2d");

        // @hpatel: I made color changes, feel free to revert that. Just thought it looked better? Remove this once you see it
        this._ctx.strokeStyle = "#D7D7D7";
        this._ctx.fillStyle   = "#3ACDAB";
    }


    public setSize( width: number, height: number ) {
        this._canvas.width = this._width = width;
        this._canvas.height = this._height = height;
    }


    public draw() {
        this.clearRect();
        this.drawGrid();
        this.drawCells();
    }


    private drawCells() {
        this._cells.forEach(cell => {
            this._ctx.beginPath();
            this._ctx.rect(cell.x * this._cellSize, cell.y * this._cellSize, this._cellSize, this._cellSize);
            this._ctx.fill();
        });
    }


    private clearRect() {
        this._ctx.clearRect(0, 0, this._width, this._height);
    }


    private drawGrid() {
        this._ctx.beginPath();
        for ( let x = 0; x <= this._width; x += this._cellSize ) {
            this._ctx.moveTo(x, 0);
            this._ctx.lineTo(x, this._height);
        }
        this._ctx.stroke();

        this._ctx.beginPath();
        for ( let y = 0; y <= this._height; y += this._cellSize ) {
            this._ctx.moveTo(0, y);
            this._ctx.lineTo(this._width, y);
        }
        this._ctx.stroke();
    }
}