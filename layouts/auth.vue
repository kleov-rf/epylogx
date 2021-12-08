<template>
  <v-app>
    <v-container fluid id="monda" style="background-color: #2d3047">
      <v-card
        class="overflow-hidden d-flex justify-center align-center"
        rounded="lg"
        elevation="12"
        height="90%"
        width="93%"
        style="background-color: #ffffff44"
      >
        <v-app-bar
          class="m-4 px-2"
          color="#2D3047"
          absolute
          elevation="8"
          dark
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
          rounded="lg"
        >
          <v-toolbar-title class="breadcrumbs px-0 py-0">
            <v-breadcrumbs
              style="width: max-content"
              :items="this.$store.state.breadCrumb_TitleBar"
              large
            >
              <template v-slot:item="{ item }">
                <v-breadcrumbs-item>
                  <v-btn
                    text
                    :href="item.href"
                    :disabled="item.disabled"
                    color="pink lighten-5"
                    class="font-weight-regular"
                    >{{ item.text }}</v-btn
                  >
                </v-breadcrumbs-item>
              </template>
            </v-breadcrumbs>
          </v-toolbar-title>
        </v-app-bar>
        <v-card class="text-center" rounded="lg" width="200px">
          <v-card-text class="p-8">
            <v-btn
              @click.stop="isLoginOpen = !isLoginOpen"
              x-large
              color="error"
              >Login</v-btn
            >
            <v-divider></v-divider>
            <v-btn
              @click.stop="isRegisterOpen = !isRegisterOpen"
              x-large
              color="primary"
              >Register</v-btn
            >
          </v-card-text>
        </v-card>
        <v-navigation-drawer
          v-model="isLoginOpen"
          absolute
          bottom
          temporary
          right
          width="40%"
        >
          <v-card
            class="d-flex justify-center align-center p-4 pt-16 mx-8 mt-16"
            color="teal lighten-4"
            flat
          >
            <nuxt />
          </v-card>
        </v-navigation-drawer>
        <v-navigation-drawer
          v-model="isRegisterOpen"
          absolute
          bottom
          temporary
          width="40%"
        >
          <v-card
            class="d-flex justify-center align-center p-4 pt-16 mx-8 mt-16"
            color="teal lighten-4"
            flat
          >
            <nuxt />
          </v-card>
        </v-navigation-drawer>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isLoginOpen: false,
      isRegisterOpen: false,
    };
  },
};
</script>

<style>
.breadcrumbs::-webkit-scrollbar {
  display: none;
}
.breadcrumbs {
  overflow-x: auto;
}
::-webkit-scrollbar {
  width: 5px;
  height: 3px;
}
::-webkit-scrollbar-track {
  background: #f1f1f149;
}
::-webkit-scrollbar-thumb {
  background-color: #1a003e26;
  border-radius: 50px;
  transition: all 0.5s ease-in-out;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #1a003e;
}
#monda {
  position: absolute;
  background-color: #ffffff00;
  height: 100vh;
  overflow: hidden;
}
a:hover {
  text-decoration: none;
}
</style>
