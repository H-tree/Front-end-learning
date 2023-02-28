<template>
  <div>
    父组件:Count: {{ parentCount }}
    <button type="button" @click="add">+</button>
    <Child :count="parentCount"> </Child>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: {
    Child,
  },
  provide() {
    return {
      count: this.parentCount,
    };
  },
  data() {
    return {
      parentCount: 100,
    };
  },
  methods: {
    add() {
      this.parentCount++;
    },
  },
};
</script>

<style></style>
