import { calculateWinner, calculateTie } from "./util";

it("should be a win", () => {
  const tiles = Array(9).fill(null);
  tiles[0] = "X";
  tiles[4] = "X";
  tiles[8] = "X";

  expect(calculateWinner(tiles)).toEqual("X");
});

it("should not be a win", () => {
  const tiles = Array(9).fill(null);
  tiles[0] = "X";
  tiles[4] = "O";
  tiles[8] = "X";

  expect(calculateWinner(tiles)).toEqual(null);
});

it("should be a tie", () => {
  const tiles = Array(9).fill(null);
  tiles[0] = "X";
  tiles[1] = "O";
  tiles[2] = "X";
  tiles[3] = "O";
  tiles[4] = "X";
  tiles[5] = "O";
  tiles[6] = "X";
  tiles[7] = "O";
  tiles[8] = "X";

  expect(calculateTie(tiles)).toEqual(true);
});
