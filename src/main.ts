import { drawActiveCell, drawGrid } from "./board";
import { State } from "./state";
import * as w4 from "./wasm4";

let previousGamepad: u8;
let state: State;

export function update(): void {
  if (!state) state = new State();

  const gamepad = load<u8>(w4.GAMEPAD1);
  const pressedThisFrame = gamepad & (gamepad ^ previousGamepad);
  previousGamepad = gamepad;

  handleInput(gamepad, pressedThisFrame);
  draw(state);
}

function handleInput(gamepad: u8, pressedThisFrame: u8): void {
  if (pressedThisFrame & w4.BUTTON_UP) state.moveUp();
  if (pressedThisFrame & w4.BUTTON_DOWN) state.moveDown();
  if (pressedThisFrame & w4.BUTTON_LEFT) state.moveLeft();
  if (pressedThisFrame & w4.BUTTON_RIGHT) state.moveRight();
}

function draw(state: State): void {
  drawGrid();
  drawActiveCell(state.activeCell);
}
