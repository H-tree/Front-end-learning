<template>
  <div>
    子组件Count: {{ count }}
    <button type="button">+</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
