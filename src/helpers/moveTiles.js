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
  const newBoard = JSON.parse(JSON.stringify(board));
  let newScore = score;

  if (direction === UP) {
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

  if (direction === DOWN) {
    newBoard.forEach((tile, idx) => {
      if (idx < 12 && tile.value !== null) {
        if (newBoard[idx + 4].value === null) {
          newBoard[idx + 4].value = tile.value;
          newBoard[idx].value = null;
        }

        if (
          notCombined(newBoard[idx + 4]) &&
          notCombined(tile) &&
          newBoard[idx + 4].value === tile.value
        ) {
          const newValue = newBoard[idx + 4].value + tile.value;
          newScore += newValue;
          newBoard[idx + 4].value = newValue;
          newBoard[idx + 4].alreadyCombined = true;
          newBoard[idx].value = null;
          newBoard[idx].alreadyCombined = false;
        }
      }
    });
  }

  if (direction === RIGHT) {
    newBoard.forEach((tile, idx) => {
      if ((idx + 1) % 4 !== 0 && tile.value !== null) {
        if (newBoard[idx + 1].value === null) {
          newBoard[idx + 1].value = tile.value;
          newBoard[idx].value = null;
        }

        if (
          notCombined(newBoard[idx + 1]) &&
          notCombined(tile) &&
          newBoard[idx + 1].value === tile.value
        ) {
          const newValue = newBoard[idx + 1].value + tile.value;
          newScore += newValue;
          newBoard[idx + 1].value = newValue;
          newBoard[idx + 1].alreadyCombined = true;
          newBoard[idx].value = null;
          newBoard[idx].alreadyCombined = false;
        }
      }
    });
  }

  if (direction === LEFT) {
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

  if (isEqual(board, newBoard)) {
    return {
      board: setBoardColors(newBoard),
      score: newScore
    };
  }

  return moveTiles(newBoard, direction, newScore);
}
