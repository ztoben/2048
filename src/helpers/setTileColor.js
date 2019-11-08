const colors = {
  2: "rgb(238, 228, 218)",
  4: "rgb(237, 224, 200)",
  8: "rgb(242, 177, 121)",
  16: "rgb(245, 149, 99)",
  32: "rgb(246, 124, 95)",
  64: "rgb(246, 94, 59)",
  128: "rgb(237, 207, 114)",
  256: "rgb(237, 204, 97)",
  512: "rgb(237, 200, 80)",
  1024: "rgb(237, 197, 63)",
  2048: "rgb(237, 194, 46)"
};

function getColor(value) {
  if (value <= 2048) return colors[value];

  if (value / 2048 <= 2048) return colors[value / 2048];

  return colors[2048];
}

export function setTileColor(tile) {
  const newTile = { ...tile };

  if (newTile.value === null) {
    newTile.color = "white";
  } else {
    newTile.color = getColor(newTile.value);
  }

  newTile.alreadyCombined = false;

  return newTile;
}
