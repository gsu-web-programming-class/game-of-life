/**
 * Created by joshuaking on 11/7/17.
 */
import { Cell } from "./Cell";

export class Grid {
    private _cellSize: number;
    private _height: number;
    private _maxCells: number;
    private _cellsX: number;
    private _cellsY: number;
    private _width: number;


    constructor( maxCells: number, cellSize: number ) {
        this._maxCells = maxCells;
        this._cellSize = cellSize;
    }


    private _isPlaying: boolean;


    get isPlaying(): boolean {
        return this._isPlaying;
    }


    private _ctx: CanvasRenderingContext2D;


    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }


    private _canvas: HTMLCanvasElement;


    get canvas(): HTMLCanvasElement {
        return this._canvas;
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
    }


    public setSize( width: number, height: number ) {
        this._canvas.width = this._width = width;
        this._canvas.height = this._height = height;

        this._cellsX = Math.round(this._width / this._cellSize);
        this._cellsY = Math.round(this._height / this._cellSize);
    }


    public draw() {
        this.clearRect();
        this.drawGrid();
        this.drawCells();
    }


    public isAlive( cell: Cell ) {
        return this._cells.filter(c => c.asKey() == cell.asKey()).length > 0;
    }


    public step( callDrawWhenDone = true ) {


        let grid = this;


        function _getNeighbors( cell: Cell ) {
            let neighbors: Cell[] = [];
            let x                 = cell.x;
            let y                 = cell.y;

            for ( let i = -1; i <= 1; i++ ) {
                x = cell.x + i;
                for ( let j = -1; j <= 1; j++ ) {
                    y = cell.y + j;
                    neighbors.push(Cell.of(x, y));
                }
            }

            return neighbors;
        }


        function _numOfNeighbors( cell: Cell ) {
            let amount = 0;
            let x      = cell.x;
            let y      = cell.y;

            for ( let i = -1; i <= 1; i++ ) {
                x = cell.x + i;
                for ( let j = -1; j <= 1; j++ ) {
                    y = cell.y + j;

                    if ( i === 0 && j === 0 ) {
                        continue;
                    }

                    if ( grid.isAlive(Cell.of(x, y)) ) { amount++; }
                    if ( amount > 3 ) { break; }
                }
            }

            return amount;
        }


        let newCells: { [key: string]: Cell }   = {};
        let uniquefier: { [key: string]: Cell } = {};

        this._cells.map(cell => _getNeighbors(cell))
            .reduce(( x, y ) => x.concat(y), [])
            .filter(cell => cell.x > -5 && cell.y > -5 && cell.x < this._cellsX + 5 && cell.y < this._cellsY + 5)
            .map(cell => uniquefier[cell.asKey()] = cell);

        Object.getOwnPropertyNames(uniquefier)
              .forEach(key => {
                  let cell = Cell.fromKey(key);

                  let isAlive        = this.isAlive(cell);
                  let numOfNeighbors = _numOfNeighbors(cell);
                  let isTwo          = numOfNeighbors == 2;
                  let isThree        = numOfNeighbors == 3;
                  let isTwoOrThree   = isTwo || isThree;

                  if ( (
                           isAlive && isTwoOrThree
                       ) || (
                           isThree
                       ) ) {
                      newCells[cell.asKey()] = cell;
                  }
              });

        this.clear();
        for ( const key in newCells ) {
            this.revive(Cell.fromKey(key));
        }
        if ( callDrawWhenDone ) {
            this.draw();
        }

        if ( this._isPlaying ) {
            window.requestAnimationFrame(() => grid.step());
        }
    }


    public start() {
        this._isPlaying = true;
        this.step();
    }


    public stop() {
        this._isPlaying = false;
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

        // @hpatel: I made color changes, feel free to revert that. Just thought it looked better? Remove this once you see it
        this._ctx.strokeStyle = "#D7D7D7";
        this._ctx.fillStyle   = "#3ACDAB";
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