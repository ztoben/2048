const colors = {
  0: "#599CD5",
  2: "#EEE4DA",
  4: "#EDE0C8",
  6: "#F49463",
  8: "#F2B079"
};

function getColor(value) {
  return colors[value.toString().slice(-1)];
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
