<template>
  <div class="components-container">
    <aside>
      <strong>SplitPane</strong> if you're used
      <a href="https://codepen.io/" target="_blank"> codepen</a>,
      <a href="https://jsfiddle.net/" target="_blank"> jsfiddle </a>will not be unfamiliar.
      <a href="https://github.com/PanJiaChen/vue-split-pane" target="_blank"> Github repository</a>
    </aside>
    <split-pane split="vertical" @resize="resize" class="split-container">
      <template slot="paneL">
        <div class="left-container" />
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container" />
          </template>
          <template slot="paneR">
            <div class="bottom-container" />
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from "vue-splitpane";

export default {
  name: "SplitpaneDemo",
  components: {
    SplitPane
  },
  methods: {
    resize() {
      console.log("resize");
    }
  }
};
</script>
<style lang="scss" scoped>
.components-container {
  position: relative;
  height: 100vh;
}
.split-container {
  height: calc(100% - 60px);
}
.left-container {
  background-color: #f38181;
  height: 100%;
}
.top-container {
  width: 100%;
  height: 100%;
  background-color: #fce38a;
}
.bottom-container {
  width: 100%;
  height: 100%;
  background-color: #95e1d3;
}
</style>