<template>
  <div>
    子组件Count: {{ value }}
    <button type="button" @click="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    //此处的值要叫value
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      childCount: 0,
    };
  },
  methods: {
    add() {
      this.childCount++;
      this.$emit("input", this.childCount);
    },
  },
};
</script>

<style></style>
