<template>
  <div>
    子组件Count: {{ childCount }}
    <button type="button">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childCount: 0,
    };
  },
  inject: ["count"],
  created() {
    this.childCount = this.count;
  },
};
</script>

<style></style>
