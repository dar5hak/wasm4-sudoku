import { Cell } from "./cell";

export class State {
  activeCell: Cell = new Cell(0, 0);

  moveUp(): void {
    if (this.activeCell.y == 0) this.activeCell.y = 8;
    else this.activeCell.y--;
  }

  moveDown(): void {
    if (this.activeCell.y == 8) this.activeCell.y = 0;
    else this.activeCell.y++;
  }

  moveLeft(): void {
    if (this.activeCell.x == 0) this.activeCell.x = 8;
    else this.activeCell.x--;
  }

  moveRight(): void {
    if (this.activeCell.x == 8) this.activeCell.x = 0;
    else this.activeCell.x++;
  }

  activateCell(cell: Cell): void {
    this.activeCell = cell;
  }
}
