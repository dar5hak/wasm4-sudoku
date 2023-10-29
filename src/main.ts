import { drawActiveCell, drawGrid, getCellByPoint } from "./board";
import { State } from "./state";
import * as w4 from "./wasm4";

let previousGamepad: u8;
let state: State;

export function update(): void {
  if (!state) state = new State();

  handleInput();
  draw(state);
}

function handleInput(): void {
  const gamepad = load<u8>(w4.GAMEPAD1);
  const pressedThisFrame = gamepad & (gamepad ^ previousGamepad);
  previousGamepad = gamepad;

  const mouse = load<u8>(w4.MOUSE_BUTTONS);
  const mouseX = load<i16>(w4.MOUSE_X);
  const mouseY = load<i16>(w4.MOUSE_Y);

  if (pressedThisFrame & w4.BUTTON_UP) state.moveUp();
  if (pressedThisFrame & w4.BUTTON_DOWN) state.moveDown();
  if (pressedThisFrame & w4.BUTTON_LEFT) state.moveLeft();
  if (pressedThisFrame & w4.BUTTON_RIGHT) state.moveRight();

  if (mouse & w4.MOUSE_LEFT) {
    const cell = getCellByPoint(mouseX, mouseY);

    if (cell != null) {
      state.activateCell(cell);
    }
  }
}

function draw(state: State): void {
  drawGrid();
  drawActiveCell(state.activeCell);
}
