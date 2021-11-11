<template lang="html">
  <div class="uwu" v-if="loading">
    <div class="middle" v-if="loading">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.uwu {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.802);
}
.middle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.bar {
  width: 8px;
  height: 70px;
  margin: 5px;
  display: inline-block;
  transform-origin: center;
  border-radius: 20px;
  animation: loader 0.8s ease-in-out infinite;
}
.bar1 {
  animation-delay: 0.1s;
}
.bar2 {
  animation-delay: 0.2s;
}
.bar3 {
  animation-delay: 0.3s;
}
.bar4 {
  animation-delay: 0.4s;
}
.bar5 {
  animation-delay: 0.5s;
}
.bar6 {
  animation-delay: 0.6s;
}
.bar7 {
  animation-delay: 0.7s;
}
.bar8 {
  animation-delay: 0.8s;
}

@keyframes loader {
  0% {
    transform: scaleY(0.2);
    background: rgba(199, 187, 255, 0.279);
  }
  50% {
    transform: scaleY(1);
    background: rgb(162, 166, 255);
  }
  100% {
    transform: scaleY(0.2);
    background: rgba(162, 167, 255, 0.286);
  }
}
</style>
