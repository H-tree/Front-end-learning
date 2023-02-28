<template>
  <Parent />
</template>

<script>
// import Parent from "./components/props/Parent";
// import Parent from "./components/emit/Parent";
// import Parent from "./components/provide/Parent";
// import Parent from "./components/refs/Parent";
// import Parent from "./components/v-model/Parent";
import Parent from "./components/eventBus/Parent";
export default {
  name: "App",
  components: {
    Parent,
  },
};
</script>

<style></style>
