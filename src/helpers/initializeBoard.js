import { placeNewTile } from "./placeNewTile";

export function initializeBoard(size) {
  const newBoard = Array(size).fill({ value: null });

  return placeNewTile(newBoard);
}
