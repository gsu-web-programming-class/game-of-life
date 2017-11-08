export class Cell {
    x: number;
    y: number;


    // noinspection JSUnusedLocalSymbols
    private constructor( x: number, y: number ) {
        this.x = Math.round(x);
        this.y = Math.round(y);
    }


    static fromKey( key: string ): Cell {
        let cellXY: string[] = key.split(":");
        return Cell.ofStr(cellXY[0], cellXY[1]);
    }


    static ofStr( x: string, y: string ) {
        return new Cell(parseInt(x), parseInt(y));
    }


    static of( x: number, y: number ) {
        return new Cell(x, y);
    }


    public asKey(): string {
        return `${this.x}:${this.y}`;
    };
}