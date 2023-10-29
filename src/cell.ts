export class Cell {
  constructor(
    public x: u8,
    public y: u8,
  ) {}

  equals(other: Cell): bool {
    return this.x == other.x && this.y == other.y;
  }
}
