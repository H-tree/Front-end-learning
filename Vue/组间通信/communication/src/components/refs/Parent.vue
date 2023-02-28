<template>
  <div>
    父组件:Count: {{ parentCount }}
    <button type="button" @click="add">+</button>
    <Child ref="child"></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: {
    Child,
  },
  data() {
    return {
      parentCount: 0,
    };
  },
  methods: {
    add() {
      this.parentCount = this.$refs.child.childCount;
    },
  },
};
</script>

<style></style>
