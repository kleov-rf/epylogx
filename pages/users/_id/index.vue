<template>
  <div>
    <v-row>
      <v-col
        v-for="(item, index) in user"
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
import validator from "validator";
export default {
  loading: {
    color: "blue",
    height: "20px",
  },
  // created() {
  //   const { id } = this.$route.params;
  //   if (validator.isMongoId(id)) {
  //     this.$axios
  //       .$get(`http://localhost:8082/api/users/${id}`)
  //       .then(({ userId }) => {
  //         const routeArr = this.$route.path.split("/");
  //         routeArr.splice(routeArr.length - 1, 1, userId);
  //         this.$router.push(routeArr.join("/"));
  //       });
  //   }
  // },
  data() {
    return {
      user: {},
    };
  },
  beforeCreate() {
    this.$store.commit("changeTitleBar", this.$route.path);
  },
  // async asyncData({ params, $axios }) {
  //   const user = await $axios.$get(
  //     `http://localhost:8082/api/users/${params.id}`
  //   );
  //   return { user };
  // },
  async fetch() {
    this.user = await this.$axios.$get(
      `http://localhost:8082/api/users/${this.$route.params.id}`
    );
  },
  layout: "main",
};
</script>

<style></style>
