<template>
  <div>
    <v-container style="background-color: pink" fluid>
      <v-row>
        <v-col offset-xl="2" lg="8" style="background-color: teal">
          <v-card
            class="d-flex justify-space-around align-center flex-wrap px-4"
            width="100%"
            height="33vh"
            rounded="lg"
          >
            <v-avatar
              :color="user.customization.pictureColor"
              height="10vw"
              width="10vw"
              class="m-4"
            >
              <!-- :src="user.pictureURL" -->
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
                :gradient="!user.isActive ? '#e8e8e8, #c3c3c3' : ''"
              ></v-img>
            </v-avatar>
            <v-card height="80%" width="70%">
              <v-card-title>{{ user.fullName }}</v-card-title>
              <v-card-subtitle>@{{ user.userId }}</v-card-subtitle>
              <v-card-text class="text-subtitle-2">
                <v-icon small>mdi-calendar</v-icon>
                {{ new Date(user.birthDate).toLocaleDateString() }}
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-row>
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
    </v-row> -->
  </div>
</template>

<script>
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
  async asyncData({ params, $axios }) {
    const user = await $axios.$get(
      `http://localhost:8082/api/users/${params.id}`
    );
    return { user };
  },
  // async fetch() {
  //   this.user = await this.$axios.$get(
  //     `http://localhost:8082/api/users/${this.$route.params.id}`
  //   );
  // },
  layout: "main",
};
</script>

<style></style>
