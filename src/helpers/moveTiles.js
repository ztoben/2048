import isEqual from "lodash.isequal";
import { setBoardColors } from "./setBoardColors";

export const UP = "up";
export const DOWN = "down";
export const RIGHT = "right";
export const LEFT = "left";

function notCombined(tile) {
  return !tile.alreadyCombined;
}

export function moveTiles(board, direction, score) {
  let newBoard = JSON.parse(JSON.stringify(board));
  let newScore = score;

  function moveHorizontal() {
    newBoard.forEach((tile, idx) => {
      if (idx % 4 !== 0 && idx !== 0 && tile.value !== null) {
        if (newBoard[idx - 1].value === null) {
          newBoard[idx - 1].value = tile.value;
          newBoard[idx].value = null;
        }

        if (
          notCombined(newBoard[idx - 1]) &&
          notCombined(tile) &&
          newBoard[idx - 1].value === tile.value
        ) {
          const newValue = newBoard[idx - 1].value + tile.value;
          newScore += newValue;
          newBoard[idx - 1].value = newValue;
          newBoard[idx - 1].alreadyCombined = true;
          newBoard[idx].value = null;
          newBoard[idx].alreadyCombined = false;
        }
      }
    });
  }

  function moveVertical() {
    newBoard.forEach((tile, idx) => {
      if (idx > 3 && tile.value !== null) {
        if (newBoard[idx - 4].value === null) {
          newBoard[idx - 4].value = tile.value;
          newBoard[idx].value = null;
        }

        if (
          notCombined(newBoard[idx - 4]) &&
          notCombined(tile) &&
          newBoard[idx - 4].value === tile.value
        ) {
          const newValue = newBoard[idx - 4].value + tile.value;
          newScore += newValue;
          newBoard[idx - 4].value = newValue;
          newBoard[idx - 4].alreadyCombined = true;
          newBoard[idx].value = null;
          newBoard[idx].alreadyCombined = false;
        }
      }
    });
  }

  if (direction === UP) moveVertical();

  if (direction === DOWN) {
    newBoard = newBoard.reverse();
    moveVertical();
    newBoard = newBoard.reverse();
  }

  if (direction === RIGHT) {
    newBoard = newBoard.reverse();
    moveHorizontal();
    newBoard = newBoard.reverse();
  }

  if (direction === LEFT) moveHorizontal();

  if (isEqual(board, newBoard)) {
    return {
      board: setBoardColors(newBoard),
      score: newScore
    };
  }

  return moveTiles(newBoard, direction, newScore);
}
