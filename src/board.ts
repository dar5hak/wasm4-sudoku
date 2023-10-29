import * as w4 from "./wasm4";
import { board, boardFlags, boardHeight, boardWidth } from "./sprites/board";

export function drawBoard(): void {
  w4.blit(board, 0, 0, boardWidth, boardHeight, boardFlags);
}
