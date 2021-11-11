<template>
  <h1>index</h1>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  },
};
</script>

<style></style>
