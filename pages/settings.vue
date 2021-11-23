<template>
  <h2></h2>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit("changeTitleBar", this.$route.path);
  },
  layout: "main",
};
</script>

<style></style>
