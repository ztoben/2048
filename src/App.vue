<template>
  <div id="app" v-hammer:swipe="handleMove">
    <div class="header">
      <h1>2048</h1>
      <div class="scores">
        <h4>Score: {{ currentScore }}</h4>
      </div>
    </div>
    <Board v-if="board" :board="board" />
    <div class="controls-container">
      <button class="reset" @click="reset">
        Reset &#8634;
      </button>
    </div>
  </div>
</template>

<script>
import isEqual from "lodash.isequal";
import Board from "./components/Board.vue";
import { initializeBoard } from "./helpers/initializeBoard";
import { DOWN, LEFT, moveTiles, RIGHT, UP } from "./helpers/moveTiles";
import { placeNewTile } from "./helpers/placeNewTile";

export default {
  name: "app",
  components: {
    Board
  },
  data: function() {
    return {
      currentScore: 0,
      board: null,
      status: "playing"
    };
  },
  created: function() {
    window.addEventListener("keydown", this.handleArrowKeys);
    this.board = initializeBoard(16);
  },
  methods: {
    reset: function() {
      this.board = initializeBoard(16);
      this.currentScore = 0;
      this.status = "playing";
    },
    handleMove({ direction }) {
      const DIRECTION_LEFT = 2;
      const DIRECTION_RIGHT = 4;
      const DIRECTION_UP = 8;
      const DIRECTION_DOWN = 16;

      if (direction === DIRECTION_LEFT) {
        this.handleArrowKeys({ key: "ArrowLeft" });
      }

      if (direction === DIRECTION_RIGHT) {
        this.handleArrowKeys({ key: "ArrowRight" });
      }

      if (direction === DIRECTION_UP) {
        this.handleArrowKeys({ key: "ArrowUp" });
      }

      if (direction === DIRECTION_DOWN) {
        this.handleArrowKeys({ key: "ArrowDown" });
      }
    },
    handleArrowKeys: function({ key }) {
      if (key === "ArrowUp") {
        const { board, score } = moveTiles(this.board, UP, this.currentScore);
        if (!isEqual(this.board, board)) {
          this.board = placeNewTile(board);
        }
        this.currentScore = score;
      }

      if (key === "ArrowDown") {
        const { board, score } = moveTiles(this.board, DOWN, this.currentScore);
        if (!isEqual(this.board, board)) {
          this.board = placeNewTile(board);
        }
        this.currentScore = score;
      }

      if (key === "ArrowLeft") {
        const { board, score } = moveTiles(this.board, LEFT, this.currentScore);
        if (!isEqual(this.board, board)) {
          this.board = placeNewTile(board);
        }
        this.currentScore = score;
      }

      if (key === "ArrowRight") {
        const { board, score } = moveTiles(
          this.board,
          RIGHT,
          this.currentScore
        );
        if (!isEqual(this.board, board)) {
          this.board = placeNewTile(board);
        }
        this.currentScore = score;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: inline-flex;
    align-items: center;
    max-width: 500px;
    min-width: 250px;
    width: 90%;
    justify-content: space-between;

    .scores {
      display: flex;
      flex-direction: column;

      h4 {
        margin: 0;
      }
    }
  }

  .controls-container {
    max-width: 500px;
    min-width: 250px;
    width: 90%;
    display: inline-flex;
    justify-content: flex-end;
    margin-top: 15px;

    .reset {
      background-color: #ede0c8;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
