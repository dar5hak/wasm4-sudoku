import * as w4 from "./wasm4";
import { board, boardFlags, boardHeight, boardWidth } from "./sprites/board";
import { Cell } from "./cell";

const GRID_ORIGIN_X = 12;
const GRID_ORIGIN_Y = 4;
const CELL_WIDTH = 15;

export function drawGrid(): void {
  store<u16>(w4.DRAW_COLORS, 0x321);
  w4.blit(board, 0, 0, boardWidth, boardHeight, boardFlags);
}

export function drawActiveCell(activeCell: Cell): void {
  const activeCellOrigin = getCellOrigin(activeCell);
  store<u16>(w4.DRAW_COLORS, 0x32);
  w4.rect(
    activeCellOrigin[0],
    activeCellOrigin[1],
    CELL_WIDTH + 1,
    CELL_WIDTH + 1,
  );
}

export function getCellByPoint(x: i32, y: i32): Cell {
  const adjustedX = x - GRID_ORIGIN_X;
  const adjustedY = y - GRID_ORIGIN_Y;

  const cellX: u8 = (adjustedX / CELL_WIDTH) as u8;
  const cellY: u8 = (adjustedY / CELL_WIDTH) as u8;

  return new Cell(cellX, cellY);
}

export function isOnGrid(x: i32, y: i32): boolean {
  return (
    x >= GRID_ORIGIN_X &&
    x < GRID_ORIGIN_X + 9 * CELL_WIDTH &&
    y >= GRID_ORIGIN_Y &&
    y < GRID_ORIGIN_Y + 9 * CELL_WIDTH
  );
}

function getCellOrigin(cell: Cell): i32[] {
  return [
    GRID_ORIGIN_X + CELL_WIDTH * cell.x,
    GRID_ORIGIN_Y + CELL_WIDTH * cell.y,
  ];
}
