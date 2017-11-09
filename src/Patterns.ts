import { Cell } from "./Cell";

export class Patterns {
    public static getGliderGuns( cellsX: number, cellsY: number ) {
        return [
            // Upper Left
            Cell.of(1, 5),
            Cell.of(1, 6),
            Cell.of(2, 5),
            Cell.of(2, 6),
            Cell.of(11, 5),
            Cell.of(11, 6),
            Cell.of(11, 7),
            Cell.of(12, 4),
            Cell.of(12, 8),
            Cell.of(13, 3),
            Cell.of(13, 9),
            Cell.of(14, 3),
            Cell.of(14, 9),
            Cell.of(15, 6),
            Cell.of(16, 4),
            Cell.of(16, 8),
            Cell.of(17, 5),
            Cell.of(17, 6),
            Cell.of(17, 7),
            Cell.of(18, 6),
            Cell.of(21, 3),
            Cell.of(21, 4),
            Cell.of(21, 5),
            Cell.of(22, 3),
            Cell.of(22, 4),
            Cell.of(22, 5),
            Cell.of(23, 2),
            Cell.of(23, 6),
            Cell.of(25, 1),
            Cell.of(25, 2),
            Cell.of(25, 6),
            Cell.of(25, 7),
            Cell.of(35, 3),
            Cell.of(35, 4),
            Cell.of(36, 3),
            Cell.of(36, 4),

            // Upper Right
            Cell.of(cellsX - 1 - 1, 5),
            Cell.of(cellsX - 1 - 1, 6),
            Cell.of(cellsX - 1 - 2, 5),
            Cell.of(cellsX - 1 - 2, 6),
            Cell.of(cellsX - 1 - 11, 5),
            Cell.of(cellsX - 1 - 11, 6),
            Cell.of(cellsX - 1 - 11, 7),
            Cell.of(cellsX - 1 - 12, 4),
            Cell.of(cellsX - 1 - 12, 8),
            Cell.of(cellsX - 1 - 13, 3),
            Cell.of(cellsX - 1 - 13, 9),
            Cell.of(cellsX - 1 - 14, 3),
            Cell.of(cellsX - 1 - 14, 9),
            Cell.of(cellsX - 1 - 15, 6),
            Cell.of(cellsX - 1 - 16, 4),
            Cell.of(cellsX - 1 - 16, 8),
            Cell.of(cellsX - 1 - 17, 5),
            Cell.of(cellsX - 1 - 17, 6),
            Cell.of(cellsX - 1 - 17, 7),
            Cell.of(cellsX - 1 - 18, 6),
            Cell.of(cellsX - 1 - 21, 3),
            Cell.of(cellsX - 1 - 21, 4),
            Cell.of(cellsX - 1 - 21, 5),
            Cell.of(cellsX - 1 - 22, 3),
            Cell.of(cellsX - 1 - 22, 4),
            Cell.of(cellsX - 1 - 22, 5),
            Cell.of(cellsX - 1 - 23, 2),
            Cell.of(cellsX - 1 - 23, 6),
            Cell.of(cellsX - 1 - 25, 1),
            Cell.of(cellsX - 1 - 25, 2),
            Cell.of(cellsX - 1 - 25, 6),
            Cell.of(cellsX - 1 - 25, 7),
            Cell.of(cellsX - 1 - 35, 3),
            Cell.of(cellsX - 1 - 35, 4),
            Cell.of(cellsX - 1 - 36, 3),
            Cell.of(cellsX - 1 - 36, 4),

            // Lower Right
            Cell.of(cellsX - 1 - 1, cellsY - 1 - 5),
            Cell.of(cellsX - 1 - 1, cellsY - 1 - 6),
            Cell.of(cellsX - 1 - 2, cellsY - 1 - 5),
            Cell.of(cellsX - 1 - 2, cellsY - 1 - 6),
            Cell.of(cellsX - 1 - 11, cellsY - 1 - 5),
            Cell.of(cellsX - 1 - 11, cellsY - 1 - 6),
            Cell.of(cellsX - 1 - 11, cellsY - 1 - 7),
            Cell.of(cellsX - 1 - 12, cellsY - 1 - 4),
            Cell.of(cellsX - 1 - 12, cellsY - 1 - 8),
            Cell.of(cellsX - 1 - 13, cellsY - 1 - 3),
            Cell.of(cellsX - 1 - 13, cellsY - 1 - 9),
            Cell.of(cellsX - 1 - 14, cellsY - 1 - 3),
            Cell.of(cellsX - 1 - 14, cellsY - 1 - 9),
            Cell.of(cellsX - 1 - 15, cellsY - 1 - 6),
            Cell.of(cellsX - 1 - 16, cellsY - 1 - 4),
            Cell.of(cellsX - 1 - 16, cellsY - 1 - 8),
            Cell.of(cellsX - 1 - 17, cellsY - 1 - 5),
            Cell.of(cellsX - 1 - 17, cellsY - 1 - 6),
            Cell.of(cellsX - 1 - 17, cellsY - 1 - 7),
            Cell.of(cellsX - 1 - 18, cellsY - 1 - 6),
            Cell.of(cellsX - 1 - 21, cellsY - 1 - 3),
            Cell.of(cellsX - 1 - 21, cellsY - 1 - 4),
            Cell.of(cellsX - 1 - 21, cellsY - 1 - 5),
            Cell.of(cellsX - 1 - 22, cellsY - 1 - 3),
            Cell.of(cellsX - 1 - 22, cellsY - 1 - 4),
            Cell.of(cellsX - 1 - 22, cellsY - 1 - 5),
            Cell.of(cellsX - 1 - 23, cellsY - 1 - 2),
            Cell.of(cellsX - 1 - 23, cellsY - 1 - 6),
            Cell.of(cellsX - 1 - 25, cellsY - 1 - 1),
            Cell.of(cellsX - 1 - 25, cellsY - 1 - 2),
            Cell.of(cellsX - 1 - 25, cellsY - 1 - 6),
            Cell.of(cellsX - 1 - 25, cellsY - 1 - 7),
            Cell.of(cellsX - 1 - 35, cellsY - 1 - 3),
            Cell.of(cellsX - 1 - 35, cellsY - 1 - 4),
            Cell.of(cellsX - 1 - 36, cellsY - 1 - 3),
            Cell.of(cellsX - 1 - 36, cellsY - 1 - 4),

            // Lower Left
            Cell.of(1, cellsY - 1 - 5),
            Cell.of(1, cellsY - 1 - 6),
            Cell.of(2, cellsY - 1 - 5),
            Cell.of(2, cellsY - 1 - 6),
            Cell.of(11, cellsY - 1 - 5),
            Cell.of(11, cellsY - 1 - 6),
            Cell.of(11, cellsY - 1 - 7),
            Cell.of(12, cellsY - 1 - 4),
            Cell.of(12, cellsY - 1 - 8),
            Cell.of(13, cellsY - 1 - 3),
            Cell.of(13, cellsY - 1 - 9),
            Cell.of(14, cellsY - 1 - 3),
            Cell.of(14, cellsY - 1 - 9),
            Cell.of(15, cellsY - 1 - 6),
            Cell.of(16, cellsY - 1 - 4),
            Cell.of(16, cellsY - 1 - 8),
            Cell.of(17, cellsY - 1 - 5),
            Cell.of(17, cellsY - 1 - 6),
            Cell.of(17, cellsY - 1 - 7),
            Cell.of(18, cellsY - 1 - 6),
            Cell.of(21, cellsY - 1 - 3),
            Cell.of(21, cellsY - 1 - 4),
            Cell.of(21, cellsY - 1 - 5),
            Cell.of(22, cellsY - 1 - 3),
            Cell.of(22, cellsY - 1 - 4),
            Cell.of(22, cellsY - 1 - 5),
            Cell.of(23, cellsY - 1 - 2),
            Cell.of(23, cellsY - 1 - 6),
            Cell.of(25, cellsY - 1 - 1),
            Cell.of(25, cellsY - 1 - 2),
            Cell.of(25, cellsY - 1 - 6),
            Cell.of(25, cellsY - 1 - 7),
            Cell.of(35, cellsY - 1 - 3),
            Cell.of(35, cellsY - 1 - 4),
            Cell.of(36, cellsY - 1 - 3),
            Cell.of(36, cellsY - 1 - 4),
        ];
    }


    static hBar( cellsX: number, cellsY: number ) {
        const cells = [];
        for ( let i = 1; i <= cellsX; i++ ) {
            cells.push(Cell.of(i, cellsY / 2));
        }
        return cells;
    }


    static getLoaf( cellsX: number, cellsY: number ) {
        let centerX = cellsX / 2;
        let centerY = cellsY / 2;
        return [
            Cell.of(centerX - 1, centerY - 1),
            Cell.of(centerX, centerY),
            Cell.of(centerX + 1, centerY + 1),
            Cell.of(centerX + 2, centerY - 1),
            Cell.of(centerX + 2, centerY),
            Cell.of(centerX + 1, centerY - 2),
            Cell.of(centerX, centerY - 2),
        ];
    }


    static getToad( cellsX: number, cellsY: number ) {
        let centerX = cellsX / 2;
        let centerY = cellsY / 2;
        return [
            Cell.of(centerX, centerY),
            Cell.of(centerX + 1, centerY),
            Cell.of(centerX + 2, centerY),
            Cell.of(centerX - 1, centerY + 1),
            Cell.of(centerX, centerY + 1),
            Cell.of(centerX + 1, centerY + 1),
        ];
    }


    static getBeacon( cellsX: number, cellsY: number ) {
        let centerX = cellsX / 2;
        let centerY = cellsY / 2;
        return [
            Cell.of(centerX - 1, centerY - 1),
            Cell.of(centerX - 1, centerY),
            Cell.of(centerX, centerY - 1),
            Cell.of(centerX, centerY),
            Cell.of(centerX + 1, centerY + 1),
            Cell.of(centerX + 1, centerY + 2),
            Cell.of(centerX + 2, centerY + 1),
            Cell.of(centerX + 2, centerY + 2),
        ];
    }
}