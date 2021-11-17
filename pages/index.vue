<template>
  <v-app>
    <v-container fluid id="monda">
      <div class="blob">
        <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 350"
        >
          <path
            d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
          />
        </svg>
      </div>
      <div class="blob2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M54,-50C68.5,-39.4,78,-19.7,75.9,-2.1C73.9,15.6,60.3,31.2,45.8,42.4C31.2,53.5,15.6,60.3,0.4,59.8C-14.7,59.4,-29.4,51.8,-39,40.6C-48.6,29.4,-53.1,14.7,-54.8,-1.7C-56.5,-18.2,-55.5,-36.3,-45.9,-46.9C-36.3,-57.5,-18.2,-60.6,0.8,-61.3C19.7,-62.1,39.4,-60.6,54,-50Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <v-card
        class="p-4 overflow-hidden"
        rounded="lg"
        elevation="6"
        height="90%"
        width="93%"
        style="background-color: #ffffff44"
      >
        <v-app-bar
          class="m-4"
          color="#2D3047"
          absolute
          elevation="8"
          dark
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
          rounded="lg"
        >
          <v-app-bar-nav-icon
            @click.stop="drawer2 = !drawer2"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>My files</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-filter</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer2"
          mobile-breakpoint="xs"
          absolute
          bottom
          temporary
        >
          <v-list nav dense class="pt-4">
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <!-- style="position: absolute; bottom: 1%; width: 94%" -->

              <v-list-item inactive>
                <v-card
                  style="min-height: fit-content"
                  class="d-flex flex-column justify-center align-center"
                  width="100%"
                  rounded="lg"
                >
                  <v-img
                    style="max-height: 120px"
                    width="100%"
                    src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                  ></v-img>

                  <v-avatar size="90" class="mt-n10 elevation-10">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                    ></v-img>
                  </v-avatar>
                  <v-card-title class="text-center"
                    >Kevin Leonardo Ruiz Flórez</v-card-title
                  >
                </v-card>
              </v-list-item>
              <v-divider class="mt-8"></v-divider>
              <v-list-group
                v-for="item in items3"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="child in item.items"
                  :key="child.title"
                  @click.stop="drawer2 = !drawer2"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-card
          class="mt-4 p-4 pt-16 overflow-y-auto"
          id="scrolling-techniques-7"
          height="96%"
          color="#ffffff00"
          elevation="0"
          rounded="lg"
        >
          <v-container style="min-height: 1500px; min-height: fit-content">
            <v-row>
              <v-col sm="12" md="6" lg="4" xl="3">
                <v-card
                  :loading="loading"
                  class="mx-auto"
                  rounded="lg"
                  max-width="374"
                  elevation="5"
                >
                  <v-img
                    round="lg"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  >
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
                    class=""
                    style="
                      display: -webkit-box;
                      max-width: 100%;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                    >Irreverent wildom wildom w w w w 2 2
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

                    <v-tab-item
                      class="pt-4 overflow-auto"
                      style="max-height: 200px"
                      ><v-card-text>
                        <div class="mb-4 text-body-1">
                          Small plates, salads & sandwiches - an intimate
                          setting with 12 indoor seats plus patio seating.
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
                        class="
                          d-flex
                          justify-center
                          align-center
                          flex-wrap
                          pt-4
                        "
                        style="gap: 12px"
                      >
                        <v-virtual-scroll
                          :items="items"
                          :item-height="50"
                          height="200"
                        >
                          <template v-slot:default="{ item }">
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-avatar
                                  :color="item.color"
                                  class="white--text"
                                >
                                  {{ item.initials }}
                                </v-avatar>
                              </v-list-item-avatar>

                              <v-list-item-content>
                                <v-list-item-title>{{
                                  item.fullName
                                }}</v-list-item-title>
                              </v-list-item-content>

                              <v-list-item-action
                                class="
                                  d-flex
                                  flex-row
                                  justify-center
                                  align-center
                                "
                                style="gap: 5px"
                              >
                                <v-btn depressed small>
                                  <v-icon small color="blue darken-2">
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
                    <v-btn color="purple darken-3" text @click="reserve">
                      <v-icon>mdi-comment-text-outline</v-icon>
                      <span class="ml-2 text-subtitle-1">7</span>
                    </v-btn>
                    <v-btn color="purple darken-3" text @click="saved = !saved">
                      <v-icon v-if="saved">mdi-bookmark-outline</v-icon>
                      <v-icon v-else>mdi-bookmark</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col sm="12" md="6" lg="4" xl="3">
                <v-card
                  :loading="loading"
                  class="mx-auto"
                  rounded="lg"
                  max-width="374"
                  elevation="5"
                >
                  <v-img
                    round="lg"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  >
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
                    class=""
                    style="
                      display: -webkit-box;
                      max-width: 100%;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                    >Irreverent wildom wildom w w w w 2 2
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

                    <v-tab-item
                      class="pt-4 overflow-auto"
                      style="max-height: 200px"
                      ><v-card-text>
                        <div class="mb-4 text-body-1">
                          Small plates, salads & sandwiches - an intimate
                          setting with 12 indoor seats plus patio seating.
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
                        class="
                          d-flex
                          justify-center
                          align-center
                          flex-wrap
                          pt-4
                        "
                        style="gap: 12px"
                      >
                        <v-virtual-scroll
                          :items="items"
                          :item-height="50"
                          height="200"
                        >
                          <template v-slot:default="{ item }">
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-avatar
                                  :color="item.color"
                                  class="white--text"
                                >
                                  {{ item.initials }}
                                </v-avatar>
                              </v-list-item-avatar>

                              <v-list-item-content>
                                <v-list-item-title>{{
                                  item.fullName
                                }}</v-list-item-title>
                              </v-list-item-content>

                              <v-list-item-action
                                class="
                                  d-flex
                                  flex-row
                                  justify-center
                                  align-center
                                "
                                style="gap: 5px"
                              >
                                <v-btn depressed small>
                                  <v-icon small color="blue darken-2">
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
                    <v-btn color="purple darken-3" text @click="reserve">
                      <v-icon>mdi-comment-text-outline</v-icon>
                      <span class="ml-2 text-subtitle-1">7</span>
                    </v-btn>
                    <v-btn color="purple darken-3" text @click="saved = !saved">
                      <v-icon v-if="saved">mdi-bookmark-outline</v-icon>
                      <v-icon v-else>mdi-bookmark</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col sm="12" md="6" lg="4" xl="3">
                <v-card
                  :loading="loading"
                  class="mx-auto"
                  rounded="lg"
                  max-width="374"
                  elevation="5"
                >
                  <v-img
                    round="lg"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  >
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
                    class=""
                    style="
                      display: -webkit-box;
                      max-width: 100%;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                    >Irreverent wildom wildom w w w w 2 2
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

                    <v-tab-item
                      class="pt-4 overflow-auto"
                      style="max-height: 200px"
                      ><v-card-text>
                        <div class="mb-4 text-body-1">
                          Small plates, salads & sandwiches - an intimate
                          setting with 12 indoor seats plus patio seating.
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
                        class="
                          d-flex
                          justify-center
                          align-center
                          flex-wrap
                          pt-4
                        "
                        style="gap: 12px"
                      >
                        <v-virtual-scroll
                          :items="items"
                          :item-height="50"
                          height="200"
                        >
                          <template v-slot:default="{ item }">
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-avatar
                                  :color="item.color"
                                  class="white--text"
                                >
                                  {{ item.initials }}
                                </v-avatar>
                              </v-list-item-avatar>

                              <v-list-item-content>
                                <v-list-item-title>{{
                                  item.fullName
                                }}</v-list-item-title>
                              </v-list-item-content>

                              <v-list-item-action
                                class="
                                  d-flex
                                  flex-row
                                  justify-center
                                  align-center
                                "
                                style="gap: 5px"
                              >
                                <v-btn depressed small>
                                  <v-icon small color="blue darken-2">
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
                    <v-btn color="purple darken-3" text @click="reserve">
                      <v-icon>mdi-comment-text-outline</v-icon>
                      <span class="ml-2 text-subtitle-1">7</span>
                    </v-btn>
                    <v-btn color="purple darken-3" text @click="saved = !saved">
                      <v-icon v-if="saved">mdi-bookmark-outline</v-icon>
                      <v-icon v-else>mdi-bookmark</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col sm="12" md="6" lg="4" xl="3">
                <v-card
                  :loading="loading"
                  class="mx-auto"
                  rounded="lg"
                  max-width="374"
                  elevation="5"
                >
                  <v-img
                    round="lg"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  >
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
                    class=""
                    style="
                      display: -webkit-box;
                      max-width: 100%;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    "
                    >Irreverent wildom wildom w w w w 2 2
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

                    <v-tab-item
                      class="pt-4 overflow-auto"
                      style="max-height: 200px"
                      ><v-card-text>
                        <div class="mb-4 text-body-1">
                          Small plates, salads & sandwiches - an intimate
                          setting with 12 indoor seats plus patio seating.
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
                        class="
                          d-flex
                          justify-center
                          align-center
                          flex-wrap
                          pt-4
                        "
                        style="gap: 12px"
                      >
                        <v-virtual-scroll
                          :items="items"
                          :item-height="50"
                          height="200"
                        >
                          <template v-slot:default="{ item }">
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-avatar
                                  :color="item.color"
                                  class="white--text"
                                >
                                  {{ item.initials }}
                                </v-avatar>
                              </v-list-item-avatar>

                              <v-list-item-content>
                                <v-list-item-title>{{
                                  item.fullName
                                }}</v-list-item-title>
                              </v-list-item-content>

                              <v-list-item-action
                                class="
                                  d-flex
                                  flex-row
                                  justify-center
                                  align-center
                                "
                                style="gap: 5px"
                              >
                                <v-btn depressed small>
                                  <v-icon small color="blue darken-2">
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
                    <v-btn color="purple darken-3" text @click="reserve">
                      <v-icon>mdi-comment-text-outline</v-icon>
                      <span class="ml-2 text-subtitle-1">7</span>
                    </v-btn>
                    <v-btn color="purple darken-3" text @click="saved = !saved">
                      <v-icon v-if="saved">mdi-bookmark-outline</v-icon>
                      <v-icon v-else>mdi-bookmark</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
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
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  },
  data: () => ({
    items3: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item" }],
        title: "Categories",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          { title: "Videos" },
          { title: "Pictures" },
          { title: "Audios" },
          { title: "Articles" },
        ],
        title: "Posts",
      },
      {
        action: "mdi-school",
        items: [{ title: "List Item" }],
        title: "Podcasts",
      },
      {
        action: "mdi-run",
        items: [{ title: "Cart" }, { title: "Wishlist" }, { title: "Orders" }],
        title: "Store",
      },
    ],
    drawer2: false,
    liked: false,
    saved: false,
    dialog: false,
    items2: [
      {
        id: 1,
        name: "Applications :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" },
        ],
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" },
        ],
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" },
            ],
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" },
        ],
      },
    ],
    group: null,
    loading: false,
    selection: null,
    options: [{ title: "Open" }, { title: "Report" }],
    colors: [
      "#2196F3",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1",
      "#82B1FF",
      "#448AFF",
      "#2979FF",
      "#2962FF",
    ],
    names: [
      "Oliver",
      "Jake",
      "Noah",
      "James",
      "Jack",
      "Connor",
      "Liam",
      "John",
      "Harry",
      "Callum",
      "Mason",
      "Robert",
      "Jacob",
      "Jacob",
      "Jacob",
      "Michael",
      "Charlie",
      "Kyle",
      "William",
      "William",
      "Thomas",
      "Joe",
      "Ethan",
      "David",
      "George",
      "Reece",
      "Michael",
      "Richard",
      "Oscar",
      "Rhys",
      "Alexander",
      "Joseph",
      "James",
      "Charlie",
      "James",
      "Charles",
      "William",
      "Damian",
      "Daniel",
      "Thomas",
      "Amelia",
      "Margaret",
      "Emma",
      "Mary",
      "Olivia",
      "Samantha",
      "Olivia",
      "Patricia",
      "Isla",
      "Bethany",
    ],
    surnames: [
      "Smith",
      "Anderson",
      "Clark",
      "Wright",
      "Mitchell",
      "Johnson",
      "Thomas",
      "Rodriguez",
      "Lopez",
      "Perez",
      "Williams",
      "Jackson",
      "Lewis",
      "Hill",
      "Roberts",
      "Jones",
      "White",
      "Lee",
      "Scott",
      "Turner",
      "Brown",
      "Harris",
      "Walker",
      "Green",
      "Phillips",
      "Davis",
      "Martin",
      "Hall",
      "Adams",
      "Campbell",
      "Miller",
      "Thompson",
      "Allen",
      "Baker",
      "Parker",
      "Wilson",
      "Garcia",
      "Young",
      "Gonzalez",
      "Evans",
      "Moore",
      "Martinez",
      "Hernandez",
      "Nelson",
      "Edwards",
      "Taylor",
      "Robinson",
      "King",
      "Carter",
      "Collins",
    ],
  }),

  watch: {},
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
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
  },
};
</script>

<style>
.blob {
  position: absolute;
  top: -5vmax;
  left: -5vmax;
  fill: #023f92;
  width: 15vmax;
  transition: all 0.6s ease-in-out;
  /* z-index: -1; */
  /* animation: move 10s ease-in-out infinite; */
  /* transform-origin: 50% 50%; */
}

.blob:hover,
.blob2:hover {
  transform: rotate(-135deg);
}

.blob2 {
  position: absolute;
  transition: all 0.6s ease-in-out;
  right: -6vmax;
  bottom: -10vmax;
  width: 25vmax;
}

/* @keyframes move {
  0% {
    transform: scale(1) translate(10px, -30px);
  }
  38% {
    transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
  }
  40% {
    transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
  }
  78% {
    transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
  }
  80% {
    transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
  }
  100% {
    transform: scale(1) translate(10px, -30px);
  }
} */

::-webkit-scrollbar {
  width: 5px;
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
  background-color: whitesmoke;
  /* min-height: fit-content; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
