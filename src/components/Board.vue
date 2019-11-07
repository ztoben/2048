<template>
  <div class="board">
    <div
      class="tile"
      v-for="(tile, index) in board"
      :style="`background-color: ${tile.color || 'white'}`"
      :key="index"
    >
      {{ tile.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
  props: {
    board: Array
  }
};
</script>

<style scoped lang="scss">
$size: 400px;
$gutter: 5px;
$noOfColumns: 4;
$noOfGutters: calc(#{$noOfColumns} - 1);
$rowHeight: calc((#{$size} - (#{$noOfGutters} * #{$gutter})) / #{$noOfColumns});

.board {
  background-color: lightgray;
  padding: 5px;
  border-radius: 12px;
  height: $size;
  width: $size;
  position: relative;
  display: grid;
  grid-gap: $gutter;
  grid-template-columns: repeat(#{$noOfColumns}, 1fr);
  grid-auto-rows: $rowHeight;

  .tile {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: x-large;
  }
}
</style>
