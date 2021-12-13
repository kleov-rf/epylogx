<template>
  <v-dialog persistent v-model="recoverDialog.show" max-width="500px">
    <v-card>
      <v-card-title
        >Recover your password (@{{
          recoverDialog.tempUser.adminId
            ? recoverDialog.tempUser.adminId
            : recoverDialog.tempUser.userId
        }})</v-card-title
      >
      <v-card-text class="px-10 mt-4">
        <v-form @submit="(e) => e.preventDefault()">
          <span class="text-caption">Write down your new password.</span>
          <v-text-field
            label="New Password"
            outlined
            clearable
            :disabled="recoverDialog.success"
            v-model="recoverDialog.newPassword.value"
            clear-icon="mdi-close-circle"
            :counter="30"
            class="mt-6"
            @change="removeErrorInput(recoverDialog.newPassword)"
            :error="recoverDialog.newPassword.hasError"
            :error-messages="recoverDialog.newPassword.errorMessages"
            :type="recoverDialog.newPassword.discover ? 'password' : 'text'"
            :append-icon="
              recoverDialog.newPassword.discover ? 'mdi-eye' : 'mdi-eye-off'
            "
            prepend-icon="mdi-lock"
            @click:append="
              recoverDialog.newPassword.discover =
                !recoverDialog.newPassword.discover
            "
          ></v-text-field>
          <span class="text-caption">Confirm your new password.</span>
          <v-text-field
            label="Confirm Password"
            outlined
            clearable
            :disabled="recoverDialog.success"
            v-model="recoverDialog.confirmPassword.value"
            clear-icon="mdi-close-circle"
            class="mt-6"
            :counter="30"
            @change="removeErrorInput(recoverDialog.confirmPassword)"
            :error="recoverDialog.confirmPassword.hasError"
            :error-messages="recoverDialog.confirmPassword.errorMessages"
            :type="recoverDialog.confirmPassword.discover ? 'password' : 'text'"
            :append-icon="
              recoverDialog.confirmPassword.discover ? 'mdi-eye' : 'mdi-eye-off'
            "
            prepend-icon="mdi-lock"
            @click:append="
              recoverDialog.confirmPassword.discover =
                !recoverDialog.confirmPassword.discover
            "
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="w-100 d-flex justify-space-around">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          depressed
          class="mb-2"
          @click="verifyRecoverPass"
        >
          Recover
        </v-btn>
        <v-btn
          color="primary"
          depressed
          class="mb-2"
          v-if="recoverDialog.success"
          text
          href="/"
        >
          Go to login
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="recoverDialog.success" :timeout="3000">
      Password recovered! Try logging up again.
    </v-snackbar>
    <v-snackbar v-model="recoverDialog.failed" :timeout="3000">
      Oops, there has been an error! Try it again.
    </v-snackbar>
  </v-dialog>
</template>

<script>
import { AES, enc } from "crypto-js";
import validator from "validator";

let mainToken;

export default {
  beforeCreate() {
    this.$store.commit("changeTitleBar", this.$route.path);
  },
  layout: "main",
  async created() {
    const decryptedId = AES.decrypt(
      this.$route.query.meta,
      "sikeThisIsMine"
    ).toString(enc.Utf8);

    const { token } = await this.$axios.$post(
      "http://localhost:8082/api/auth/login",
      {
        username: "adminKevin",
        password: "password",
      }
    );

    const monda = AES.encrypt("pedro", "sikeThisIsMine");

    console.log(monda);

    mainToken = token;

    try {
      const dbUser = await this.$axios.$get(
        `http://localhost:8082/api/users/${decryptedId}`
      );

      this.recoverDialog.tempUser = dbUser;
    } catch (err) {
      try {
        const dbAdmin = await this.$axios.$get(
          `http://localhost:8082/api/admins/${decryptedId}`,
          {
            headers: { "x-token": mainToken },
          }
        );
        this.recoverDialog.tempUser = dbAdmin;
      } catch (error) {
        return;
      }
    }
  },
  data() {
    return {
      recoverDialog: {
        tempUser: false,
        show: true,
        newPassword: {
          value: "",
          hasError: false,
          errorMessages: [],
          discover: true,
        },
        confirmPassword: {
          value: "",
          hasError: false,
          errorMessages: [],
          discover: true,
        },
        success: false,
        failed: false,
      },
    };
  },
  methods: {
    removeErrorInput(input) {
      input.hasError = false;
      input.errorMessages = [];
    },
    async verifyRecoverPass() {
      const [isInLength, isConfirmed] = [
        validator.isLength(this.recoverDialog.newPassword.value, {
          min: 6,
          max: 30,
        }),
        this.recoverDialog.newPassword.value ==
          this.recoverDialog.confirmPassword.value,
      ];

      if (!isInLength) {
        this.recoverDialog.newPassword.errorMessages.push(
          `Password value must be between 6-30 characters`
        );
        this.recoverDialog.newPassword.hasError = true;

        return;
      }

      if (!isConfirmed) {
        this.recoverDialog.confirmPassword.errorMessages.push(
          `Both passwords don't match, write them correctly.`
        );
        this.recoverDialog.confirmPassword.hasError = true;

        return;
      }

      if (
        await this.changePass(
          this.recoverDialog.confirmPassword.value,
          !!this.recoverDialog.tempUser.adminId
        )
      ) {
        this.recoverDialog.success = true;
        this.recoverDialog.newPassword.value = "";
        this.recoverDialog.confirmPassword.value = "";
      } else {
        this.recoverDialog.failed = true;
      }
    },
    async changePass(newPass, isAdmin) {
      try {
        const monda = await this.$axios.$put(
          `http://localhost:8082/api/${
            isAdmin ? "admins" : "users"
          }/${this.recoverDialog.tempUser._id.toString()}`,
          {
            userPayload: {
              password: newPass,
            },
          },
          {
            headers: {
              "x-token": mainToken,
            },
          }
        );

        console.log(monda);
        return true;
      } catch (err) {
        return false;
      }
    },
  },
};
</script>

<style></style>
