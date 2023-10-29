import * as w4 from "./wasm4";
import { board, boardFlags, boardHeight, boardWidth } from "./sprites/board";
import { Cell } from "./cell";

export function drawGrid(): void {
  store<u16>(w4.DRAW_COLORS, 0x21);
  w4.blit(board, 0, 0, boardWidth, boardHeight, boardFlags);
}

export function drawActiveCell(activeCell: Cell): void {
  const activeCellOrigin = getCellOrigin(activeCell);
  store<u16>(w4.DRAW_COLORS, 0x31);
  w4.rect(activeCellOrigin[0], activeCellOrigin[1], 18, 18);
}

function getCellOrigin(cell: Cell): i32[] {
  return [3 + 17 * cell.x, 3 + 17 * cell.y];
}
