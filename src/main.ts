import { drawBoard } from "./board";
import * as w4 from "./wasm4";

export function update(): void {
  store<u16>(w4.DRAW_COLORS, 0x21);

  drawBoard();
}
