<template>
  <div>
    子组件Count: {{ childCount }}
    <button type="button" @click="add">+</button>
  </div>
</template>

<script>
import EventBus from "./EventBus";
export default {
  data() {
    return {
      childCount: 0,
    };
  },
  methods: {
    add() {
      this.childCount++;
      EventBus.$emit('add', this.childCount);
    },
  },
};
</script>

<style></style>
