import { setTileColor } from "./setTileColor";

export function setBoardColors(board) {
  const newBoard = JSON.parse(JSON.stringify(board));

  newBoard.forEach((tile, idx) => {
    newBoard[idx] = setTileColor(tile);
  });

  return newBoard;
}
