<template></template>

<script>
export default {
  layout: "main",
  beforeCreate() {
    this.$store.commit("changeTitleBar", this.$route.path);
  },
};
</script>

<style></style>
