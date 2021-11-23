<template>
  <h1>search index</h1>
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
