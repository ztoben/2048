import any from "@travi/any";
import { setBoardColors } from "./setBoardColors";

const indexPositionReducer = (acc, cur, idx) => {
  if (cur.value === null) {
    acc.push(idx);
  }

  return acc;
};

export function placeNewTile(board) {
  const possibleNewTiles = [2, 2, 2, 2, 2, 2, 2, 2, 2, 4]; // 1 in 10 chance of getting a 4
  const newTileValue = any.fromList(possibleNewTiles);
  const newBoard = JSON.parse(JSON.stringify(board));
  const newPossibleIndexPositions = newBoard.reduce(indexPositionReducer, []);

  if (newPossibleIndexPositions.length > 0) {
    const newTilePosition = any.fromList(newPossibleIndexPositions);
    const newTile = newBoard[newTilePosition];

    newTile.value = newTileValue;
  }

  return setBoardColors(newBoard);
}
