import { drawActiveCell, drawGrid } from "./board";
import { State } from "./state";

export function update(): void {
  let state: State;
  if (!state) state = new State();

  drawGrid();
  drawActiveCell(state.activeCell);
}
