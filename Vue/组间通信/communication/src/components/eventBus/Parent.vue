<template>
  <div>
    父组件:Count: {{ parentCount }}
    <button type="button" @click="add">+</button>
    <Child @add="add"></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";
import EventBus from "./EventBus";

export default {
  components: {
    Child,
  },
  data() {
    return {
      parentCount: 0,
    };
  },
  mounted() {
    EventBus.$on("add", (val) => {
      this.parentCount = val;
    });
  },
};
</script>

<style></style>
