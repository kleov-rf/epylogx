<template>
  <div>
    <v-row>
      <v-col
        v-for="(item, index) in posts"
        :key="index"
        sm="12"
        md="6"
        lg="4"
        xl="3"
      >
        <file-card :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import fileCard from "~/components/fileCard.vue";
export default {
  loading: {
    color: "blue",
    height: "20px",
  },
  components: { fileCard },
  beforeCreate() {
    this.$store.commit("changeTitleBar", this.$route.path);
  },
  layout: "main",
  async asyncData({ params, $axios }) {
    const posts = await $axios.$get(
      "https://epylogx-api.herokuapp.com/api/users/"
    );
    // console.log(posts);
    return { posts };
  },
};
</script>

<style></style>
