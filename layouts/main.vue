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
          class="m-4 px-2"
          color="#2D3047"
          absolute
          elevation="8"
          dark
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
          rounded="lg"
        >
          <v-app-bar-nav-icon
            @click.stop="sideMenu = !sideMenu"
          ></v-app-bar-nav-icon>

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

          <v-spacer></v-spacer>

          <div class="d-flex align-center" style="gap: 15px">
            <div
              class="d-flex justify-space-around"
              v-if="!$store.state.metaUser"
            >
              <div
                class="d-flex flex-row pl-2"
                v-if="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
              >
                <v-btn color="primary" @click.stop="loginMenu = !loginMenu"
                  >Log in</v-btn
                >
                <v-btn
                  class="ml-2"
                  color="info"
                  outlined
                  @click.stop="registerMenu = !registerMenu"
                  >Register</v-btn
                >
              </div>
              <div v-else class="pl-4">
                <v-menu
                  v-model="authReduced"
                  :close-on-content-click="false"
                  :nudge-width="40"
                  offset-y
                  left
                  rounded="lg"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">
                      <v-icon :small="!$vuetify.breakpoint.xs">mdi-lock</v-icon>
                      <span class="mx-1" v-if="!$vuetify.breakpoint.xs"
                        >auth</span
                      >
                    </v-btn>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item class="d-flex justify-center">
                        <v-btn
                          color="primary"
                          @click.stop="
                            authReduced = !authReduced;
                            loginMenu = !loginMenu;
                          "
                          >Log in</v-btn
                        >
                      </v-list-item>
                      <v-list-item class="d-flex justify-center">
                        <v-btn
                          color="info"
                          outlined
                          @click.stop="
                            authReduced = !authReduced;
                            registerMenu = !registerMenu;
                          "
                          >Register</v-btn
                        >
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>
              </div>
            </div>
            <div v-else class="d-flex flex-row">
              <v-menu
                v-model="notifications"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y
                rounded="lg"
                :left="$vuetify.breakpoint.mdAndUp"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="pr-1" icon v-bind="attrs" v-on="on">
                    <v-badge
                      :content="messages.length"
                      :value="messages"
                      color="blue lighten-2"
                      overlap
                    >
                      <v-icon> mdi-bell </v-icon>
                    </v-badge>
                  </v-btn>
                </template>

                <v-card elevation="0">
                  <v-card-text class="px-0 pt-2 pb-0">
                    <v-list style="max-height: 200px; overflow: auto">
                      <v-list-item
                        v-for="item in 12"
                        :key="item"
                        @click="notifications != notifications"
                        link
                      >
                        <v-list-item-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-subtitle
                            >John Veider has posted a new
                            article.</v-list-item-subtitle
                          >
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-menu offset-y left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn icon v-bind="attrs" v-on="on">
                                <v-icon>mdi-dots-horizontal</v-icon>
                              </v-btn>
                            </template>

                            <v-list dense>
                              <v-list-item link>
                                <v-list-item-icon>
                                  <v-icon>mdi-alert</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                  >Turn off this user
                                  notifications</v-list-item-title
                                >
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      block
                      color="primary"
                      text
                      @click="notifications = false"
                    >
                      clear all
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
              <v-btn icon @click.stop="chatMenu = !chatMenu">
                <v-badge
                  :content="messages.length"
                  :value="messages"
                  color="red lighten-2"
                  overlap
                >
                  <v-icon>mdi-facebook-messenger</v-icon>
                </v-badge>
              </v-btn>
            </div>
            <v-menu
              v-model="settingsMenu"
              :close-on-content-click="false"
              :nudge-width="80"
              offset-y
              left
              rounded="lg"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-action>
                      <v-switch
                        inset
                        v-model="message"
                        color="purple"
                      ></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable messages</v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action>
                      <v-switch inset v-model="hints" color="purple"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable hints</v-list-item-title>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="settingsMenu = false"> Cancel </v-btn>
                  <v-btn color="primary" text @click="settingsMenu = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </div>
        </v-app-bar>
        <v-navigation-drawer
          v-model="sideMenu"
          mobile-breakpoint="xs"
          absolute
          bottom
          temporary
          height="94%"
          floating
          width="270px"
          :class="
            'rounded-br-lg rounded-tr-lg ' +
            (!$vuetify.breakpoint.xs ? 'm-4 mx-0' : '')
          "
          style="max-width: 450px"
        >
          <v-app-bar
            color="#6A76AB"
            extended
            dark
            height="220px"
            src="https://picsum.photos/1920/1080?random"
            class="mb-4"
          >
            <template v-slot:img="{ props }">
              <v-img
                v-bind="props"
                gradient="to top, rgba(0,0,0,.5), rgba(0,0,0,.2)"
              ></v-img>
            </template>
            <v-card
              width="98%"
              height="75%"
              rounded="lg"
              id="thumbProfilePhoto"
              class="mt-4 d-flex flex-column justify-end align-center"
              elevation="8"
              style=""
            >
              <v-avatar size="70" class="elevation-8">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                ></v-img>
              </v-avatar>
              <v-toolbar-title
                class="py-4 px-6 text-center"
                style="width: fit-content; max-width: 90%"
              >
                Kevin Ruiz
              </v-toolbar-title>
            </v-card>
            <template v-slot:extension>
              <div class="w-100 mt-n4 d-flex justify-center align-center">
                <v-chip class="ma-2 elevation-4" color="primary">
                  Primary
                </v-chip>
                <v-chip class="ma-2 elevation-4" color="warning">
                  Secondary
                </v-chip>
              </div>
            </template>
          </v-app-bar>
          <v-list nav class="p-0">
            <v-list-item-group
              v-model="selectedFromSideMenu"
              active-class="deep-purple--text text-accent-4"
            >
              <!-- style="position: absolute; bottom: 1%; width: 94%" -->

              <!-- <v-list-item inactive>
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
              <v-divider class="mt-8"></v-divider> -->

              <div v-for="item in menuUserItems" :key="item.name" class="px-4">
                <div
                  v-if="
                    item.mustBeUser == $store.state.metaUser || !item.mustBeUser
                  "
                >
                  <v-list-group
                    :prepend-icon="item.icon"
                    v-if="item.subItems"
                    no-action
                  >
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item
                      v-for="child in item.subItems"
                      :key="child.name"
                      v-if="
                        child.mustBeUser == $store.state.metaUser ||
                        !child.mustBeUser
                      "
                      @click.stop="sideMenu = !sideMenu"
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="child.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon
                        ><v-icon>{{ child.icon }}</v-icon></v-list-item-icon
                      >
                    </v-list-item>
                  </v-list-group>
                  <v-list-item v-else @click.stop="sideMenu = !sideMenu">
                    <v-list-item-content>
                      <v-list-item-title
                        ><v-icon class="mr-7">{{ item.icon }}</v-icon>
                        {{ item.name }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </div>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer
          v-model="chatMenu"
          mobile-breakpoint="xs"
          absolute
          temporary
          right
          bottom
          height="94%"
          width="20vw"
          :class="'rounded-lg ' + (!$vuetify.breakpoint.xs ? 'm-4' : '')"
          :style="
            'max-width: 450px;' +
            (!$vuetify.breakpoint.xs ? 'min-width: 335px' : '')
          "
        >
          <v-card
            class="
              d-flex
              flex-column
              justify-space-around
              align-center
              px-4
              pb-2
            "
            width="100%"
            min-height="800px"
            height="100%"
            flat
          >
            <v-card
              height="10%"
              min-height="65px"
              class="
                pt-2
                overflow-hidden
                d-flex
                justify-space-between
                align-center
                my-2
              "
              rounded="lg"
              elevation="0"
              width="98%"
            >
              <v-badge bordered :color="offline ? 'red' : 'green'" overlap>
                <v-btn class="ml-3" small fab depressed>
                  <v-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                  </v-avatar>
                </v-btn>
              </v-badge>
              <v-card-title>Chats</v-card-title>
              <v-menu
                v-model="userChatSettings"
                :close-on-content-click="false"
                :nudge-width="50"
                offset-y
                left
                bottom
                nudge-top="15px"
                rounded="lg"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="mr-2" large icon v-bind="attrs" v-on="on">
                    <v-icon large>mdi-cog-outline</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <v-list dense>
                    <v-list-item inactive>
                      <v-list-item-action>
                        <v-switch
                          dense
                          inset
                          v-model="offline"
                          color="purple"
                        ></v-switch>
                      </v-list-item-action>
                      <v-list-item-title>Set offline state</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </v-card>
            <v-card height="20%" width="98%" rounded="lg" flat>
              <v-text-field
                label="Search user"
                class="mb-0 px-4"
                dense
                full-width
                append-icon="mdi-magnify"
              ></v-text-field>
              <v-card
                flat
                height="fit-content"
                class="overflow-hidden px-2"
                rounded="lg"
                width="100%"
              >
                <div
                  id="activeUsers"
                  class="d-flex"
                  style="height: 90px; overflow: auto"
                >
                  <v-card
                    v-for="item in 9"
                    :key="item"
                    flat
                    hover
                    :ripple="true"
                    class="mx-1 d-flex flex-column align-center justify-center"
                  >
                    <v-avatar size="40px" class="mx-4">
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                    </v-avatar>
                    <v-card-subtitle
                      class="p-0 pt-2 px-1"
                      style="font-size: 80%"
                      >Leonardo</v-card-subtitle
                    >
                  </v-card>
                </div>
              </v-card>
            </v-card>
            <v-card
              height="65%"
              class="
                d-flex
                flex-column
                justify-start
                align-center
                overflow-hidden
              "
              rounded="lg"
              width="100%"
              id="chats"
              flat
            >
              <v-tabs centered v-model="tab">
                <v-tab href="#recent">Recents</v-tab>
                <v-tab href="#chat">Chat</v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab" class="overflow-y-auto">
                <v-tab-item value="recent">
                  <v-container fluid>
                    <v-row>
                      <v-col style="height: fit-content">
                        <v-card
                          height="29%"
                          class="
                            d-flex
                            flex-column
                            justify-start
                            align-center
                            overflow-hidden
                          "
                          rounded="lg"
                          width="100%"
                          id="chats"
                          elevation="8"
                        >
                          <v-card
                            class="d-flex align-center py-2 px-4"
                            height="60px"
                            width="100%"
                            style="z-index: 1"
                            tile
                            elevation="3"
                            flat
                          >
                            <v-avatar size="36px">
                              <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                              />
                            </v-avatar>
                            <v-card-title class="text-subtitle-2"
                              >John Erbin</v-card-title
                            >
                          </v-card>
                          <v-card
                            class="
                              d-flex
                              flex-column-reverse
                              py-2
                              px-4
                              overflow-y-auto
                            "
                            height="270px"
                            width="100%"
                            tile
                            flat
                          >
                            <v-card
                              tile
                              flat
                              v-for="item in 50"
                              :key="item"
                              color="whitesmoke"
                              :class="
                                item % 2 == 0
                                  ? 'd-flex justify-start'
                                  : 'd-flex justify-end'
                              "
                            >
                              <v-chip
                                :color="
                                  item % 2 == 0
                                    ? 'blue lighten-4'
                                    : 'grey lighten-3'
                                "
                                class="my-2 outlined"
                                style="width: fit-content; min-height: 35px"
                              >
                                Monda {{ item }}
                              </v-chip>
                            </v-card>
                          </v-card>
                          <v-card
                            class="d-flex align-center py-2 px-4"
                            height="100px"
                            style="z-index: 1"
                            width="100%"
                            tile
                            elevation="4"
                          >
                            <v-textarea
                              clearable
                              no-resize
                              class="pr-4 pt-8"
                              clear-icon="mdi-close-circle"
                              rows="2"
                              label="Insert your text..."
                            ></v-textarea>
                            <v-btn
                              class="pl-1"
                              color="blue"
                              dark
                              elevation="2"
                              fab
                              small
                            >
                              <v-icon>mdi-send</v-icon>
                            </v-btn>
                          </v-card>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
                <v-tab-item value="chat">
                  <v-container fluid>
                    <v-row>
                      <v-col style="height: fit-content">
                        <v-card
                          height="29%"
                          class="
                            d-flex
                            flex-column
                            justify-start
                            align-center
                            overflow-hidden
                          "
                          rounded="lg"
                          width="100%"
                          id="chats"
                          elevation="8"
                        >
                          <v-card
                            class="d-flex align-center py-2 px-4"
                            height="60px"
                            width="100%"
                            style="z-index: 1"
                            tile
                            elevation="3"
                            flat
                          >
                            <v-avatar size="36px">
                              <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                              />
                            </v-avatar>
                            <v-card-title class="text-subtitle-2"
                              >John Erbin</v-card-title
                            >
                          </v-card>
                          <v-card
                            class="
                              d-flex
                              flex-column-reverse
                              py-2
                              px-4
                              overflow-y-auto
                            "
                            height="270px"
                            width="100%"
                            tile
                            flat
                          >
                            <v-card
                              tile
                              flat
                              v-for="item in 50"
                              :key="item"
                              color="whitesmoke"
                              :class="
                                item % 2 == 0
                                  ? 'd-flex justify-start'
                                  : 'd-flex justify-end'
                              "
                            >
                              <v-chip
                                :color="
                                  item % 2 == 0
                                    ? 'blue lighten-4'
                                    : 'grey lighten-3'
                                "
                                class="my-2 outlined"
                                style="width: fit-content; min-height: 35px"
                              >
                                Monda {{ item }}
                              </v-chip>
                            </v-card>
                          </v-card>
                          <v-card
                            class="d-flex align-center py-2 px-4"
                            height="100px"
                            style="z-index: 1"
                            width="100%"
                            tile
                            elevation="4"
                          >
                            <v-textarea
                              clearable
                              no-resize
                              class="pr-4 pt-8"
                              clear-icon="mdi-close-circle"
                              rows="2"
                              label="Insert your text..."
                            ></v-textarea>
                            <v-btn
                              class="pl-1"
                              color="blue"
                              dark
                              elevation="2"
                              fab
                              small
                            >
                              <v-icon>mdi-send</v-icon>
                            </v-btn>
                          </v-card>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
            <!-- <v-card
              height="70%"
              class="
                d-flex
                flex-column
                justify-start
                align-center
                my-2
                overflow-hidden
              "
              rounded="lg"
              width="98%"
              id="chats"
              elevation="8"
            >
              <v-card
                class="d-flex align-center py-2 px-4"
                height="10%"
                width="100%"
                style="z-index: 1"
                tile
                elevation="3"
                flat
              >
                <v-avatar size="36px">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                </v-avatar>
                <v-card-title class="text-subtitle-2">John Erbin</v-card-title>
              </v-card>
              <v-card
                class="d-flex flex-column-reverse py-2 px-4 overflow-y-auto"
                height="70%"
                width="100%"
                tile
                flat
              >
                <v-card
                  tile
                  flat
                  v-for="item in 50"
                  :key="item"
                  color="whitesmoke"
                  :class="
                    item % 2 == 0
                      ? 'd-flex justify-start'
                      : 'd-flex justify-end'
                  "
                >
                  <v-chip
                    :color="item % 2 == 0 ? 'blue lighten-4' : 'grey lighten-3'"
                    class="my-2 outlined"
                    style="width: fit-content; min-height: 35px"
                  >
                    Monda {{ item }}
                  </v-chip>
                </v-card>
              </v-card>
              <v-card
                class="d-flex align-center py-2 px-4"
                height="20%"
                style="z-index: 1"
                width="100%"
                tile
                elevation="4"
              >
                <v-textarea
                  clearable
                  no-resize
                  class="pr-4 pt-8"
                  clear-icon="mdi-close-circle"
                  rows="2"
                  label="Insert your text..."
                ></v-textarea>
                <v-btn class="pl-1" color="blue" dark elevation="2" fab small>
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-card>
            </v-card> -->
          </v-card>
        </v-navigation-drawer>
        <v-navigation-drawer
          v-model="loginMenu"
          mobile-breakpoint="xs"
          absolute
          temporary
          right
          bottom
          height="fit-content"
          width="40vw"
          :class="'rounded-lg ' + (!$vuetify.breakpoint.xs ? 'm-4' : '')"
          style="max-width: 450px"
        >
          <v-card
            class="d-flex flex-column justify-space-start align-center p-4"
            width="100%"
            height="fit-content"
            flat
          >
            <v-card-title style="letter-spacing: 5px" class="mb-8"
              >LOGIN</v-card-title
            >
            <v-card-text class="px-8">
              <v-form>
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <span class="text-caption">
                      Log in with your Google account.
                    </span>
                    <v-btn
                      x-large
                      width="100%"
                      class="d-flex justify-space-center mt-4"
                      color="blue darken-4 text-white"
                    >
                      <v-icon color="blue lighten-5">mdi-google</v-icon>
                      <v-spacer></v-spacer>
                      Google Login
                    </v-btn>
                    <v-divider class="my-8"></v-divider>
                    <span class="text-caption">
                      Or log in with your email/userId and password.
                    </span>
                    <v-text-field
                      class="mt-6"
                      label="Email or UserId"
                      outlined
                      clear-icon="mdi-close-circle"
                      clearable
                      prepend-icon="mdi-account"
                    ></v-text-field>
                  </v-window-item>
                  <v-window-item :value="2">
                    <span class="text-caption">Insert your password...</span>
                    <v-text-field
                      label="Password"
                      outlined
                      clearable
                      clear-icon="mdi-close-circle"
                      class="mt-6"
                      :type="togglePasswordLogin ? 'password' : 'text'"
                      :append-icon="
                        togglePasswordLogin ? 'mdi-eye' : 'mdi-eye-off'
                      "
                      prepend-icon="mdi-lock"
                      @click:append="togglePasswordLogin = !togglePasswordLogin"
                    ></v-text-field>
                  </v-window-item>
                </v-window>
              </v-form>
            </v-card-text>
            <v-card-actions class="w-100 d-flex justify-space-around">
              <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" depressed @click="step++">
                {{ step == 2 ? "access" : "next" }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-navigation-drawer>
        <v-navigation-drawer
          v-model="registerMenu"
          mobile-breakpoint="xs"
          absolute
          temporary
          right
          bottom
          height="fit-content"
          width="40vw"
          :class="'rounded-lg ' + (!$vuetify.breakpoint.xs ? 'm-4' : '')"
          style="max-width: 450px"
        >
          <v-card
            class="d-flex flex-column justify-space-start align-center p-4"
            width="100%"
            height="fit-content"
            flat
          >
            <v-card-title style="letter-spacing: 5px" class="mb-8">
              REGISTER
            </v-card-title>
            <v-card-text class="px-8">
              <v-form>
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <span class="text-caption">
                      Register with your Google account.
                    </span>
                    <v-btn
                      x-large
                      width="100%"
                      class="d-flex justify-space-center mt-4"
                      color="blue darken-4 text-white"
                    >
                      <v-icon color="blue lighten-5">mdi-google</v-icon>
                      <v-spacer></v-spacer>
                      Google Register
                    </v-btn>
                    <v-divider class="my-8"></v-divider>
                    <span class="text-caption">
                      Or register manually with your email.
                    </span>
                    <v-text-field
                      class="mt-6"
                      label="Email"
                      outlined
                      clear-icon="mdi-close-circle"
                      clearable
                      type="email"
                      prepend-icon="mdi-at"
                    ></v-text-field>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-text-field
                      label="User ID"
                      outlined
                      clearable
                      clear-icon="mdi-close-circle"
                      class="mt-2"
                      prepend-icon="mdi-account-star"
                    ></v-text-field>
                    <div class="d-flex justify-space-between" style="gap: 20px">
                      <v-text-field
                        label="First Name"
                        outlined
                        clearable
                        prepend-icon="mdi-account-details"
                        clear-icon="mdi-close-circle"
                      ></v-text-field>
                      <v-text-field
                        label="Last Name"
                        outlined
                        clearable
                        clear-icon="mdi-close-circle"
                      ></v-text-field>
                    </div>
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Your birth date"
                          prepend-icon="mdi-calendar"
                          outlined
                          readonly
                          @click="menu2 = true"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        :max="new Date().toISOString()"
                        v-model="date"
                        v-if="menu2"
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-window-item>
                </v-window>
              </v-form>
            </v-card-text>
            <v-card-actions class="w-100 d-flex justify-space-around">
              <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" v-if="step != 2" depressed @click="step++">
                Next
              </v-btn>
              <v-btn color="primary" v-else depressed> Access </v-btn>
            </v-card-actions>
          </v-card>
        </v-navigation-drawer>
        <v-card
          class="mt-4 p-4 pt-16 overflow-y-auto"
          id="scrolling-techniques-7"
          height="96%"
          color="#ffffff00"
          elevation="0"
          rounded="lg"
        >
          <v-container>
            <nuxt />
            <!-- <v-col sm="12" md="6" lg="4" xl="3">
              <embed
                src="https://res.cloudinary.com/epylog/image/upload/v1637195197/Guia_de_Adaptacion_a_WCAG_2_1_v1_0_1_lhjnic.pdf"
                height="800px"
                width="600px"
              />
            </v-col> -->
            <v-btn @click="updateMessage">Log</v-btn>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { io } from "socket.io-client";
import { mapState } from "vuex";
import fileCard from "~/components/fileCard.vue";
export default {
  components: { fileCard },
  mounted() {
    const socket = io("https://epylogx-api.herokuapp.com/", {
      extraHeaders: {
        "x-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTgzYzhjNWU1YzI3YmVkNjZkZmFhOTAiLCJpc0FkbWluIjoiYWRtaW5LZXZpbiIsImlhdCI6MTYzNzM0NjE1MCwiZXhwIjoxNjM3MzUzMzUwfQ.0EO176bRoYK1k4AENKwxlR4U3P2VZG6LHYsrrsfTgTQ",
      },
    });

    socket.on("connect", () => {
      console.log("Client has connected to the socket Server io module");
    });

    socket.on("disconnect", () => console.log("nos fuimos"));

    // socket.on("active-users", console.log);
  },
  data: () => ({
    tab: null,
    date: null,
    menu2: false,
    togglePasswordLogin: true,
    step: 1,
    menuUserItems: [
      {
        name: "Home",
        icon: "mdi-home-variant",
      },
      {
        name: "Search",
        icon: "mdi-magnify",
      },
      {
        name: "Categories",
        icon: "mdi-tag-multiple",

        subItems: [
          { name: "Search", icon: "mdi-tag-search" },
          { name: "My Interests", icon: "mdi-tag-heart", mustBeUser: true },
        ],
      },
      {
        name: "Users",
        icon: "mdi-account",

        subItems: [
          { name: "Search", icon: "mdi-account-search" },
          {
            name: "Following",
            icon: "mdi-account-arrow-right",
            mustBeUser: true,
          },
          {
            name: "Followers",
            icon: "mdi-account-arrow-left-outline",
            mustBeUser: true,
          },
        ],
      },
      {
        name: "Podcasts",
        icon: "mdi-broadcast",

        subItems: [
          { name: "Search", icon: "mdi-layers-search" },
          { name: "My Podcasts", icon: "mdi-text-to-speech", mustBeUser: true },
        ],
      },
      {
        name: "Posts",
        icon: "mdi-text-box",

        subItems: [
          { name: "Liked", icon: "mdi-file-star", mustBeUser: true },
          {
            name: "Saved",
            icon: "mdi-bookmark-box-multiple",
            mustBeUser: true,
          },
          { name: "Search", icon: "mdi-file-search" },
          {
            name: "Articles",
            icon: "mdi-file-document-multiple",
          },
          { name: "Pictures", icon: "mdi-image-multiple" },
          {
            name: "Videos",
            icon: "mdi-clipboard-play-multiple",
          },
          { name: "Audios", icon: "mdi-file-music" },
        ],
      },
      {
        name: "Store",
        icon: "mdi-store",

        subItems: [
          { name: "Items", icon: "mdi-package-variant" },
          { name: "Cart", icon: "mdi-cart", mustBeUser: true },
          { name: "Wishlist", icon: "mdi-archive-star", mustBeUser: true },
          {
            name: "My Orders",
            icon: "mdi-card-account-details",
            mustBeUser: true,
          },
        ],
      },
      {
        name: "Upload",
        icon: "mdi-file-upload",
        mustBeUser: true,
        subItems: [
          {
            name: "Articles",
            icon: "mdi-file-document-multiple",
            mustBeUser: true,
          },
          { name: "Pictures", icon: "mdi-image-multiple", mustBeUser: true },
          {
            name: "Videos",
            icon: "mdi-clipboard-play-multiple",
            mustBeUser: true,
          },
          { name: "Audio", icon: "mdi-headphones", mustBeUser: true },
          { name: "Podcast", icon: "mdi-broadcast", mustBeUser: true },
        ],
      },
    ],
    sideMenu: false,
    selectedFromSideMenu: null,
    chatMenu: false,
    loginMenu: false,
    registerMenu: false,
    settingsMenu: false,
    authReduced: false,
    notifications: false,
    notifSettings: false,
    hints: false,
    message: null,
    messages: ["a"],
    userChatSettings: false,
    offline: false,
    recentChats: ["a"],
    integer: 0,
  }),
  // computed: {
  //   ...mapState({
  //     message: (state) => state.metaUser,
  //   }),
  // },
  methods: {
    updateMessage(e) {
      this.integer++;
      this.$store.commit("registerUser", this.integer % 2 == 0);
    },
  },
};
</script>

<style>
#thumbProfilePhoto {
  backdrop-filter: blur(4px);
  background-color: #00000033;
  transition: all 0.5s ease-in-out;
}
#thumbProfilePhoto:hover {
  background-color: #00000044;
  backdrop-filter: blur(8px);
}

.breadcrumbs::-webkit-scrollbar,
#activeUsers::-webkit-scrollbar {
  display: none;
}

.breadcrumbs {
  overflow-x: auto;
}
.blob {
  position: absolute;
  top: -5vmax;
  left: -5vmax;
  fill: #023f92;
  width: 15vmax;
  transition: all 0.6s ease-in-out;
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
#chats {
  /* background: url("~/assets/emptyChats.svg"); */
  background-position: center;
  background-size: contain;
}
#monda {
  position: absolute;
  background-color: #ffffff00;
  /* min-height: fit-content; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
a:hover {
  text-decoration: none;
}
</style>
