<template>
  <div>
    <v-card class="mx-auto my-4" rounded="lg" max-width="374" elevation="5">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        round="lg"
        height="200"
        src="https://picsum.photos/id/11/500/300"
        gradient="to top, rgba(100,115,201,0), rgba(0,0,0,.18)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="#2d3047455"
            ></v-progress-circular>
          </v-row>
        </template>
        <div
          class="d-flex justify-space-between pl-2 py-2"
          style="min-height: fit-content"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#2D3047"
                dark
                fab
                size="40"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-file-document-outline</v-icon>
              </v-btn>
            </template>
            <span>Article</span>
          </v-tooltip>
          <v-menu offset-y transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon dark v-bind="attrs" v-on="on">
                <v-icon dark>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Open</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item @click.stop="dialog = true">
                  <v-list-item-content>
                    <v-list-item-title>Report</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-alert-octagon-outline</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </v-img>
      <v-card-title
        style="
          display: -webkit-box;
          max-width: 100%;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        "
        >{{ item }}
      </v-card-title>
      <v-tabs class="mt-n3 px-4" fixed-tabs>
        <v-tab>
          <v-icon> mdi-information-outline </v-icon>
        </v-tab>
        <v-tab>
          <v-icon> mdi-account-multiple-outline </v-icon>
        </v-tab>
        <v-tab>
          <v-icon> mdi-tag-multiple-outline </v-icon>
        </v-tab>

        <v-tab-item class="pt-4 overflow-auto" style="max-height: 200px"
          ><v-card-text>
            <div class="mb-4 text-body-1">
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
            <v-row class="mx-0 grey--text ms-1 text-caption">
              <v-col>published on: 24/01/2001</v-col>
              <v-col>uploaded on: 24/01/2001</v-col>
            </v-row>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card
            flat
            class="d-flex justify-center align-center flex-wrap pt-4"
            style="gap: 12px"
          >
            <v-virtual-scroll :items="items" :item-height="50" height="200">
              <template v-slot:default="{ item }">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-avatar :color="item.color" class="white--text">
                      {{ item.initials }}
                    </v-avatar>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.fullName }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action
                    class="d-flex flex-row justify-center align-center"
                    style="gap: 5px"
                  >
                    <v-btn
                      depressed
                      small
                      :color="
                        item.initials.includes('H') ? 'blue darken-2' : ''
                      "
                    >
                      <v-icon
                        v-if="item.initials.includes('H')"
                        small
                        color="white"
                      >
                        mdi-account-check-outline
                      </v-icon>
                      <v-icon v-else small color="blue darken-2">
                        mdi-account-plus-outline
                      </v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-card>
        </v-tab-item>
        <v-tab-item class="overflow-auto" style="max-height: 200px">
          <v-card flat>
            <v-card-subtitle>Main</v-card-subtitle>
            <v-card-text>
              <v-chip-group column>
                <v-chip small>5:30Pasdf</v-chip>
                <v-chip small>7:30PM</v-chip>
                <v-chip small>8:00PM</v-chip>
                <v-chip small>9:00PasdfdsaM</v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-subtitle>Branches</v-card-subtitle>
            <v-card-text>
              <v-chip-group column>
                <v-chip small>5:30PM</v-chip>
                <v-chip small>7:30asdfasfPM</v-chip>
                <v-chip small>8:00PM</v-chip>
                <v-chip small>8:00PM</v-chip>
                <v-chip small>8adsf:00PM</v-chip>
                <v-chip small>9:00aPM</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-actions class="d-flex justify-space-around">
        <v-btn color="purple darken-3" text @click="liked = !liked">
          <v-icon v-if="liked">mdi-thumb-up</v-icon>
          <v-icon v-else>mdi-thumb-up-outline</v-icon>
          <span class="ml-2 text-subtitle-1">3</span>
        </v-btn>
        <v-btn color="purple darken-3" text>
          <v-icon>mdi-comment-text-outline</v-icon>
          <span class="ml-2 text-subtitle-1">7</span>
        </v-btn>
        <v-btn color="purple darken-3" text @click="saved = !saved">
          <v-icon v-if="saved">mdi-bookmark-outline</v-icon>
          <v-icon v-else>mdi-bookmark</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card rounded="lg">
        <v-card-title>
          <span class="text-h5">Report Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Main reason *"
                  dense
                  outlined
                  required
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  clearable
                  outlined
                  no-resize
                  counter="120"
                  required
                  clear-icon="mdi-close-circle"
                  label="Descript your reasons why this post should be checked *"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: false,
      saved: false,
      dialog: false,
      options: [{ title: "Open" }, { title: "Report" }],
      colors: ["#000"],
      names: ["a"],
      surnames: ["a"],
    };
  },
  computed: {
    items() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from({ length: 10000 }, (k, v) => {
        const name = this.names[this.genRandomIndex(namesLength)];
        const surname = this.surnames[this.genRandomIndex(surnamesLength)];

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]}${surname[0]}`,
        };
      });
    },
  },
  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
  },
  props: ["item", "video"],
};
</script>

<style></style>
