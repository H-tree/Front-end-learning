<template>
  <div>
    子组件Count: {{ childCount }}
    <button type="button" @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childCount: 0,
    };
  },
  methods: {
    add() {
      this.childCount++;
      this.$emit("add");
    },
  },
};
</script>

<style></style>
