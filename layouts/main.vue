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
                <v-btn
                  color="primary"
                  @click.stop="layoutLogin.show = !layoutLogin.show"
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
                            layoutLogin.show = !layoutLogin.show;
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
                  :content="chats.unseenMessages"
                  :value="messages"
                  v-if="chats.unseenMessages"
                  color="red lighten-2"
                  overlap
                >
                  <v-icon>mdi-facebook-messenger</v-icon>
                </v-badge>
                <v-icon v-else>mdi-facebook-messenger</v-icon>
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
                <v-list>
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

                  <v-list-item :ripple="true" v-if="$store.state.metaUser">
                    <v-list-item-title>
                      <v-btn
                        class="py-6"
                        color="error"
                        text
                        block
                        @click="signOut"
                      >
                        <v-icon class="mr-4">mdi-logout</v-icon> Sign out
                      </v-btn>
                    </v-list-item-title>
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
                <v-img :src="this.$store.state.metaUser.pictureURL"></v-img>
              </v-avatar>
              <v-toolbar-title
                class="py-4 px-6 text-center"
                style="width: fit-content; max-width: 90%"
              >
                {{
                  this.$store.state.metaUser.adminId
                    ? this.$store.state.metaUser.adminId
                    : this.$store.state.metaUser.userId
                }}
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
              <div v-for="item in menuUserItems" :key="item.name" class="px-4">
                <div
                  v-if="
                    item.isAdmin
                      ? $store.state.isAdmin
                      : item.mustBeUser
                      ? !!$store.state.metaUser && !$store.state.isAdmin
                      : !$store.state.isAdmin
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
                        item.isAdmin
                          ? checkRoles(child)
                          : child.mustBeUser
                          ? !!$store.state.metaUser
                          : true
                      "
                      @click.stop="sideMenu = !sideMenu"
                      :href="child.url == $route.path ? undefined : child.url"
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
                  <v-list-item
                    v-else
                    @click.stop="sideMenu = !sideMenu"
                    :href="item.url == $route.path ? undefined : item.url"
                  >
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
                    <img :src="$store.state.metaUser.pictureURL" />
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
                v-model="chats.searchString"
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
                    v-for="item in actives()"
                    :key="item._id"
                    flat
                    link
                    :ripple="true"
                    @click="
                      chats.selectedChatUser = item;
                      tab = 'chat';
                    "
                    class="mx-1 d-flex flex-column align-center justify-center"
                  >
                    <v-avatar size="40px" class="mx-4">
                      <img :src="item.pictureURL" />
                    </v-avatar>
                    <v-card-subtitle
                      class="p-0 pt-2 px-1"
                      style="font-size: 80%"
                    >
                      {{ `${item.adminId ? item.adminId : item.userId}` }}
                    </v-card-subtitle>
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
                <v-tab href="#recent" @click="chats.unseenRecents = 0">
                  <v-badge
                    color="red"
                    :content="chats.unseenRecents"
                    v-if="chats.unseenRecents"
                    >Recents</v-badge
                  >
                  <span v-else>Recents</span>
                </v-tab>
                <v-tab href="#chat" @click="chats.unseenChats = 0">
                  <v-badge
                    color="red"
                    :content="chats.unseenChats"
                    v-if="chats.unseenChats"
                    >Chats</v-badge
                  >
                  <span v-else>Chats</span>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab" class="overflow-y-auto">
                <v-tab-item value="recent">
                  <v-container fluid class="max-width:100%">
                    <v-row style="height: 460px">
                      <v-col
                        style="height: fit-content; width: 300px; gap: 10px"
                        class="d-flex flex-column"
                      >
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
                          v-for="item in chats.recents"
                          :key="item._id"
                          @click="
                            chats.selectedChatUser = item;
                            tab = 'chat';
                          "
                        >
                          <v-card
                            class="
                              d-flex
                              align-center
                              justify-space-around
                              py-2
                              px-4
                            "
                            height="60px"
                            width="100%"
                            style="z-index: 1"
                            tile
                            @click="
                              tab = 'chat';
                              chats.unseenRecents
                                ? chats.unseenRecents--
                                : undefined;
                              chats.unseenMessages
                                ? chats.unseenMessages--
                                : undefined;
                              chats.recentsWithUser.find(
                                (userMess) => userMess.user == item._id
                              )
                                ? (chats.recentsWithUser.find(
                                    (userMess) => userMess.user == item._id
                                  ).unseenMessages = 0)
                                : undefined;
                              item._id == chats.selectedChatUser.id
                                ? (chats.unseenChats = 0)
                                : undefined;
                            "
                            :ripple="true"
                            flat
                          >
                            <v-avatar size="36px">
                              <img :src="item.pictureURL" />
                            </v-avatar>
                            <div style="width: 80%">
                              <v-card-title class="text-subtitle-2">
                                {{ item.adminId ? item.adminId : item.userId }}
                                <span
                                  class="text-caption"
                                  style="
                                    width: 90%;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                  "
                                  >{{ lastMessageFrom(item._id) }}</span
                                >
                              </v-card-title>
                            </div>
                            <v-badge
                              class="mt-2 mr-4"
                              color="red"
                              v-if="
                                chats.recentsWithUser.find(
                                  (userMess) => userMess.user == item._id
                                )
                                  ? chats.recentsWithUser.find(
                                      (userMess) => userMess.user == item._id
                                    ).unseenMessages
                                  : false
                              "
                              :content="
                                chats.recentsWithUser.find(
                                  (userMess) => userMess.user == item._id
                                )
                                  ? chats.recentsWithUser
                                      .find(
                                        (userMess) => userMess.user == item._id
                                      )
                                      .unseenMessages.toString()
                                  : 'b'
                              "
                            ></v-badge>
                          </v-card>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
                <v-tab-item value="chat" v-if="chats.selectedChatUser">
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
                              <img :src="chats.selectedChatUser.pictureURL" />
                            </v-avatar>
                            <v-card-title class="text-subtitle-2">{{
                              `${this.chats.selectedChatUser.givenName} ${this.chats.selectedChatUser.familyName}`
                            }}</v-card-title>
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
                              v-for="item in chats.recentMessages"
                              :key="item._id"
                              color="whitesmoke"
                              :class="
                                item.receiver == $store.state.metaUser._id
                                  ? 'd-flex align-center justify-start'
                                  : 'd-flex flex-row-reverse align-center justify-start'
                              "
                            >
                              <v-card
                                :color="
                                  item.receiver == $store.state.metaUser._id
                                    ? 'blue lighten-4'
                                    : 'grey lighten-3'
                                "
                                class="my-2 outlined p-2"
                                rounded="lg"
                                style="
                                  width: fit-content;
                                  min-height: 35px;
                                  max-width: 70%;
                                  word-wrap: break-word;
                                "
                              >
                                {{ item.text }}
                              </v-card>
                              <span class="text-caption text-grey mx-2">{{
                                new Date(item.sentDate).toLocaleTimeString()
                              }}</span>
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
                              v-model="chats.newMessage"
                              class="pr-4 pt-8"
                              clear-icon="mdi-close-circle"
                              rows="2"
                              label="Insert your text..."
                              @keydown="sendMessage"
                              @click="
                                chats.unseenChats = 0;
                                chats.recentsWithUser.find(
                                  (userMess) =>
                                    userMess.user == chats.selectedChatUser._id
                                )
                                  ? (chats.recentsWithUser.find(
                                      (userMess) =>
                                        userMess.user ==
                                        chats.selectedChatUser._id
                                    ).unseenMessages = 0)
                                  : undefined;
                              "
                            ></v-textarea>
                            <v-btn
                              class="pl-1"
                              color="blue"
                              dark
                              elevation="2"
                              fab
                              small
                              @click="sendMessage"
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
          </v-card>
        </v-navigation-drawer>
        <v-navigation-drawer
          v-model="layoutLogin.show"
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
              <v-form @submit="(e) => e.preventDefault()">
                <v-window v-model="layoutLogin.step">
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
                      v-model="layoutLogin.email_userId.value"
                      clear-icon="mdi-close-circle"
                      clearable
                      prepend-icon="mdi-account"
                      hint="Here goes your email, userId or adminId"
                      id="loginEmailUserIdField"
                      @change="removeErrorInput(layoutLogin.email_userId)"
                      :error="layoutLogin.email_userId.hasError"
                      :error-messages="layoutLogin.email_userId.errorMessages"
                      @keydown="verifyLoginOnEnter"
                    ></v-text-field>
                  </v-window-item>
                  <v-window-item :value="2">
                    <span class="text-caption">Insert your password...</span>
                    <v-text-field
                      label="Password"
                      outlined
                      id="loginPasswordField"
                      clearable
                      v-model="layoutLogin.password.value"
                      clear-icon="mdi-close-circle"
                      class="mt-6"
                      @change="removeErrorInput(layoutLogin.password)"
                      :error="layoutLogin.password.hasError"
                      :error-messages="layoutLogin.password.errorMessages"
                      :type="
                        layoutLogin.togglePasswordLogin ? 'password' : 'text'
                      "
                      :append-icon="
                        layoutLogin.togglePasswordLogin
                          ? 'mdi-eye'
                          : 'mdi-eye-off'
                      "
                      prepend-icon="mdi-lock"
                      @click:append="
                        layoutLogin.togglePasswordLogin =
                          !layoutLogin.togglePasswordLogin
                      "
                      @keydown="verifyLoginOnEnter"
                    ></v-text-field>
                    <v-expansion-panels
                      flat
                      :value="layoutLogin.password.forgot"
                    >
                      <v-expansion-panel
                        :disabled="layoutLogin.password.forgotDisabled"
                      >
                        <v-expansion-panel-header class="px-0">
                          <span class="text-subtitle-2"
                            >Forgot your password?</span
                          >
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <span
                            >You'll be sent a email to
                            <b>{{ layoutLogin.email_userId.value }}</b> email
                            account with a link to recover your password. Are
                            you sure?</span
                          >
                          <div class="mt-2 d-flex justify-end">
                            <v-btn color="success" text @click="forgotPassword"
                              >Yes</v-btn
                            >
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-window-item>
                </v-window>
              </v-form>
            </v-card-text>
            <v-card-actions class="w-100 d-flex justify-space-around">
              <v-btn
                :disabled="layoutLogin.step == 1"
                text
                @click="layoutLogin.step--"
              >
                Back
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" depressed @click="loginForm">
                {{ layoutLogin.step == 2 ? "access" : "next" }}
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
              <v-form @submit="(e) => e.preventDefault()">
                <v-window v-model="layoutRegister.step">
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
                      v-model="layoutRegister.email.value"
                      @change="removeErrorInput(layoutRegister.email)"
                      :error="layoutRegister.email.hasError"
                      :error-messages="layoutRegister.email.errors"
                      type="email"
                      prepend-icon="mdi-at"
                      @keydown="verifyRegisterOnEnter"
                    ></v-text-field>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-text-field
                      label="User ID"
                      outlined
                      clearable
                      counter="15"
                      v-model="layoutRegister.userId.value"
                      @change="verifyUserIdRegister"
                      :error="layoutRegister.userId.hasError"
                      :error-messages="layoutRegister.userId.errors"
                      clear-icon="mdi-close-circle"
                      class="mt-2"
                      prepend-icon="mdi-account-star"
                    ></v-text-field>
                    <div class="d-flex justify-space-between" style="gap: 20px">
                      <v-text-field
                        label="First Name"
                        outlined
                        v-model="layoutRegister.firstName.value"
                        @change="verifyName(layoutRegister.firstName)"
                        :error="layoutRegister.firstName.hasError"
                        :error-messages="layoutRegister.firstName.errors"
                        clearable
                        counter="21"
                        prepend-icon="mdi-account-details"
                        clear-icon="mdi-close-circle"
                      ></v-text-field>
                      <v-text-field
                        label="Last Name"
                        outlined
                        clearable
                        counter="21"
                        v-model="layoutRegister.secondName.value"
                        @change="verifyName(layoutRegister.secondName)"
                        :error="layoutRegister.secondName.hasError"
                        :error-messages="layoutRegister.secondName.errors"
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
                          label="Your birth date"
                          prepend-icon="mdi-calendar"
                          outlined
                          v-model="layoutRegister.birth.value"
                          :error="layoutRegister.birth.hasError"
                          :error-messages="layoutRegister.birth.errors"
                          readonly
                          @change="verifyBirthDate"
                          @click="layoutRegister.birth.showMenu = true"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        :max="new Date().toISOString()"
                        v-model="layoutRegister.birth.value"
                        v-if="layoutRegister.birth.showMenu"
                        @input="layoutRegister.birth.showMenu = false"
                      ></v-date-picker>
                    </v-menu>
                    <v-text-field
                      label="Password"
                      outlined
                      clearable
                      v-model="layoutRegister.password.value"
                      clear-icon="mdi-close-circle"
                      :counter="30"
                      @change="verifyPasswordRegister"
                      :error="layoutRegister.password.hasError"
                      :error-messages="layoutRegister.password.errors"
                      :type="
                        layoutRegister.password.discover ? 'password' : 'text'
                      "
                      :append-icon="
                        layoutRegister.password.discover
                          ? 'mdi-eye'
                          : 'mdi-eye-off'
                      "
                      prepend-icon="mdi-lock"
                      @click:append="
                        layoutRegister.password.discover =
                          !layoutRegister.password.discover
                      "
                      @keydown="verifyRegisterOnEnter"
                    ></v-text-field>
                  </v-window-item>
                </v-window>
              </v-form>
            </v-card-text>
            <v-card-actions class="w-100 d-flex justify-space-around">
              <v-btn
                :disabled="layoutRegister.step === 1"
                text
                @click="layoutRegister.step--"
              >
                Back
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" depressed @click="registerForm">
                {{ layoutRegister.step == 1 ? "Next" : "Register" }}
              </v-btn>
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
            <v-col sm="12" md="6" lg="4" xl="3">
              <embed
                src="https://res.cloudinary.com/epylog/image/upload/v1638587269/wael8nypmrzgg3dlvf7c.pdf"
                height="800px"
                width="600px"
              />
            </v-col>
            <v-btn>{{ $route.name }}</v-btn>
            <v-row justify="center">
              <v-dialog v-model="logoutDialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Open Dialog
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5"> You're Offline </v-card-title>
                  <v-card-text
                    >Your session has ended. Please log in again.</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="logoutDialog = false"
                      @click.stop="layoutLogin.show = !layoutLogin.show"
                    >
                      Log In
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-snackbar
              v-model="layoutLogin.password.forgotSent"
              :timeout="3000"
            >
              Email sent to {{ layoutLogin.email_userId.value }}.
            </v-snackbar>
            <v-snackbar v-model="layoutRegister.success" :timeout="3000">
              Welcome to Epylogx {{ layoutRegister.tempUser.userId }}, we're
              glad to have you here :).
            </v-snackbar>
            <v-snackbar v-model="layoutRegister.fail" :timeout="3000">
              Ugh, something went wrong while creating
              {{ layoutRegister.tempUser.userId }}, try it again.
            </v-snackbar>
            <v-snackbar v-model="layoutLogin.success" :timeout="3000">
              Welcome back, {{ layoutLogin.tempUser.givenName }} (@{{
                layoutLogin.tempUser.adminId
                  ? layoutLogin.tempUser.adminId + " : admin"
                  : layoutLogin.tempUser.userId
              }})!
            </v-snackbar>
          </v-container>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { io } from "socket.io-client";
import fileCard from "~/components/fileCard.vue";
import validator from "validator";

let socket, adminToken;

export default {
  components: { fileCard },
  async mounted() {
    await this.getAdminToken();
    this.socketMethods();
  },
  data: () => ({
    layoutRegister: {
      tempUser: false,
      email: {
        value: "",
        hasError: false,
        errors: [],
      },
      userId: {
        value: "",
        hasError: false,
        errors: [],
      },
      firstName: {
        value: "",
        hasError: false,
        errors: [],
      },
      secondName: {
        value: "",
        hasError: false,
        errors: [],
      },
      birth: {
        value: "",
        hasError: false,
        errors: [],
        showMenu: false,
      },
      password: {
        value: "",
        hasError: false,
        errors: [],
        discover: true,
      },
      step: 1,
      success: false,
      fail: false,
    },
    layoutLogin: {
      tempUser: false,
      email_userId: {
        id: "#loginEmailUserIdField",
        hasError: false,
        errorMessages: [],
        value: "",
      },
      password: {
        id: "#loginPasswordField",
        hasError: false,
        errorMessages: [],
        value: "",
        forgot: 2,
        forgotSent: false,
        forgotDisabled: false,
      },
      togglePasswordLogin: true,
      step: 1,
      show: false,
      success: false,
    },
    chats: {
      unseenMessages: 0,
      unseenRecents: 0,
      unseenChats: 0,
      activeUsers: [],
      activeAdmins: [],
      searchString: "",
      recents: [],
      recentsWithUser: [],
      selectedChatUser: false,
      recentMessages: [],
      newMessage: "",
    },
    tab: null,
    date: null,
    menu2: false,
    menuUserItems: [
      {
        name: "Home",
        icon: "mdi-home-variant",
        url: "/",
      },
      {
        name: "Admin Panel",
        icon: "mdi-abacus",
        isAdmin: true,
        url: "/admin-panel",
      },
      {
        name: "Management",
        icon: "mdi-shield-crown",
        isAdmin: true,
        subItems: [
          {
            name: "Admins",
            icon: "mdi-account-lock",
            url: "/admin-panel/admins",
            roles: {
              adminManage: true,
            },
          },
          {
            name: "Categories",
            icon: "mdi-tag-multiple",
            url: "/admin-panel/categories",
            roles: {
              categoryManage: true,
            },
          },
          {
            name: "Posts",
            icon: "mdi-text-box",
            url: "/admin-panel/posts",
            roles: {
              postManage: true,
            },
          },
          {
            name: "Records",
            icon: "mdi-form-select",
            url: "/admin-panel/records",
            roles: {
              adminManage: true,
            },
          },
          {
            name: "Reports",
            icon: "mdi-alert-octagon",
            url: "/admin-panel/reports",
            roles: {
              postManage: true,
            },
          },
          {
            name: "Store Items",
            icon: "mdi-package-variant",
            url: "/admin-panel/store/items",
            roles: {
              storeManage: true,
            },
          },
          {
            name: "Store Orders",
            icon: "mdi-receipt",
            url: "/admin-panel/store/orders",
            roles: {
              storeOrdersManage: true,
            },
          },
          {
            name: "Users",
            icon: "mdi-account-multiple",
            url: "/admin-panel/users",
            roles: {
              userManage: true,
            },
          },
          {
            name: "ISCEDs",
            icon: "mdi-school",
            url: "/admin-panel/isceds",
            roles: {
              iscedManage: true,
            },
          },
          {
            name: "Post Types",
            icon: "mdi-ballot",
            url: "/admin-panel/post-types",
            roles: {
              postTypeManage: true,
            },
          },
          {
            name: "Podcast",
            icon: "mdi-cast-audio-variant",
            url: "/admin-panel/podcasts",
            roles: {
              podcastManage: true,
            },
          },
        ],
      },
      {
        name: "Search",
        icon: "mdi-magnify",
        url: "/search",
      },
      {
        name: "Categories",
        icon: "mdi-tag-multiple",
        subItems: [
          { name: "Search", icon: "mdi-tag-search", url: "/categories" },
          {
            name: "My Interests",
            icon: "mdi-tag-heart",
            mustBeUser: true,
            url: "/categories/my-interests",
          },
        ],
      },
      {
        name: "Users",
        icon: "mdi-account",
        subItems: [
          { name: "Search", icon: "mdi-account-search", url: "/users" },
          {
            name: "Following",
            icon: "mdi-account-arrow-right",
            url: `/me/following`,
            mustBeUser: true,
          },
          {
            name: "Followers",
            icon: "mdi-account-arrow-left-outline",
            url: `/me/followers`,
            mustBeUser: true,
          },
        ],
      },
      {
        name: "Podcasts",
        icon: "mdi-broadcast",
        subItems: [
          { name: "Search", icon: "mdi-layers-search", url: "/podcasts" },
          {
            name: "My Podcasts",
            icon: "mdi-text-to-speech",
            mustBeUser: true,
            url: `/me/podcasts`,
          },
        ],
      },
      {
        name: "Posts",
        icon: "mdi-text-box",
        subItems: [
          {
            name: "Liked",
            icon: "mdi-file-star",
            mustBeUser: true,
            url: "/posts/liked",
          },
          {
            name: "Saved",
            icon: "mdi-bookmark-box-multiple",
            mustBeUser: true,
            url: "/posts/saved",
          },
          { name: "Search", icon: "mdi-file-search", url: "/posts" },
          {
            name: "Articles",
            icon: "mdi-file-document-multiple",
            url: "/posts/articles",
          },
          {
            name: "Pictures",
            icon: "mdi-image-multiple",
            url: "/posts/pictures",
          },
          {
            name: "Videos",
            icon: "mdi-clipboard-play-multiple",
            url: "/posts/videos",
          },
          { name: "Audios", icon: "mdi-file-music", url: "/posts/audios" },
        ],
      },
      {
        name: "Store",
        icon: "mdi-store",
        subItems: [
          { name: "Items", icon: "mdi-package-variant", url: "/store/items" },
          {
            name: "Cart",
            icon: "mdi-cart",
            mustBeUser: true,
            url: "/store/cart",
          },
          {
            name: "Wishlist",
            icon: "mdi-archive-star",
            mustBeUser: true,
            url: "/store/wishlist",
          },
          {
            name: "My Orders",
            icon: "mdi-card-account-details",
            mustBeUser: true,
            url: "/store/orders",
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
            url: "/posts/articles/upload",
          },
          {
            name: "Pictures",
            icon: "mdi-image-multiple",
            mustBeUser: true,
            url: "/posts/pictures/upload",
          },
          {
            name: "Videos",
            icon: "mdi-clipboard-play-multiple",
            mustBeUser: true,
            url: "/posts/videos/upload",
          },
          {
            name: "Audio",
            icon: "mdi-headphones",
            mustBeUser: true,
            url: "/posts/audios/upload",
          },
          {
            name: "Podcast",
            icon: "mdi-broadcast",
            mustBeUser: true,
            url: "/podcasts/new",
          },
        ],
      },
    ],
    sideMenu: false,
    selectedFromSideMenu: null,
    chatMenu: false,
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
    logoutDialog: false,
    integer: 0,
  }),
  computed: {
    loginEmailUserId() {
      return this.layoutLogin.email_userId.value;
    },
    loginPassword() {
      return this.layoutLogin.password.value;
    },
    searchString() {
      return this.chats.searchString;
    },
    selectedChatUser() {
      return this.chats.selectedChatUser;
    },
    metaUserId() {
      return (
        this.$store.state.metaUser.adminId ?? this.$store.state.metaUser.userId
      );
    },
    metaUserObjectId() {
      return this.$store.state.metaUser._id;
    },
    registerEmail() {
      return this.layoutRegister.email.value;
    },
    registerUserId() {
      return this.layoutRegister.userId.value;
    },
    registerFirstName() {
      return this.layoutRegister.firstName.value;
    },
    registerSecondName() {
      return this.layoutRegister.secondName.value;
    },
    registerBirthDate() {
      return this.layoutRegister.birth.value;
    },
    registerPass() {
      return this.layoutRegister.password.value;
    },
  },
  methods: {
    socketMethods() {
      socket = io("http://localhost:8082", {
        extraHeaders: {
          "x-token": localStorage.getItem("token"),
        },
      });

      socket.on("connect", () => {
        console.log("Client has connected to the socket Server io module");
      });

      socket.on("this-user", async (tokenizedUser) => {
        // user = tokenizedUser;
        this.$store.commit("registerMetaUser", {
          metaUser: tokenizedUser,
          isAdmin: !!tokenizedUser?.adminId,
        });
        this.chats.recents = await this.$axios.$get(
          `http://localhost:8082/api/${
            this.$store.state.isAdmin ? "admins" : "users"
          }/${this.$store.state.metaUser._id}/chats`,
          {
            headers: {
              "x-token": localStorage.getItem("token"),
            },
          }
        );

        this.updateRecentsMessages();
      });

      socket.on("disconnect", () => {
        if (localStorage.getItem("token")) {
          this.logoutDialog = true;
          this.$store.commit("registerMetaUser", {
            metaUser: false,
            isAdmin: false,
          });
        }
        console.log("Disconnected from Socket io Server");
      });

      socket.on("active-admins", (activeAdmins) => {
        this.chats.activeAdmins = activeAdmins;
      });
      socket.on("active-users", (activeUsers) => {
        this.chats.activeUsers = activeUsers;
      });

      socket.on("get-message", async ({ message }) => {
        const admin = await this.$axios.$get(
          `http://localhost:8082/api/${
            this.$store.state.isAdmin ? "admins" : "users"
          }/${message.transmitter}`,
          {
            headers: {
              "x-token": localStorage.getItem("token"),
            },
          }
        );
        this.chats.unseenMessages++;

        if (this.chats.recents.some((recent) => admin._id == recent._id)) {
          this.chats.recents.splice(
            this.chats.recents.findIndex((recent) => recent._id == admin._id),
            1
          );

          if (message.transmitter == this.chats.selectedChatUser._id) {
            this.chats.unseenChats++;
          } else {
            this.chats.unseenRecents++;
          }
          this.chats.recents.unshift(admin);
          this.chats.recentsWithUser
            .find((userMess) => userMess.user == admin._id)
            ?.messages.unshift(message);
          this.chats.recentsWithUser.find(
            (userMess) => userMess.user == admin._id
          ).unseenMessages++;
        } else {
          this.chats.unseenRecents++;
          this.chats.recents.unshift(admin);
          this.chats.selectedChatUser = admin;
          this.chats.recentMessages.unshift(message);
          this.chats.recentsWithUser.unshift({
            user: admin._id,
            messages: this.chats.recentMessages,
            unseenMessages: 1,
          });
        }
      });
    },
    lastMessageFrom(id) {
      try {
        const lastMessage = this.chats.recentsWithUser.find(
          (userMess) => userMess.user == id
        ).messages[0];
        const lastMessageString = `${lastMessage.text} ${new Date(
          lastMessage.sentDate
        ).toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })}`;

        return lastMessage.transmitter == id
          ? lastMessageString
          : "You: " + lastMessageString;
      } catch (er) {
        return "";
      }
    },
    actives() {
      let usersToFilter;
      if (this.$store.state.isAdmin) {
        usersToFilter = [...this.chats.activeAdmins];
      } else {
        usersToFilter = [...this.chats.activeUsers];
      }
      return usersToFilter.filter(
        (user) =>
          new RegExp(this.searchString, "i").test(
            `${user.adminId ? user.adminId : user.userId}`
          ) && user._id != this.$store.state.metaUser._id
      );
    },
    async getAdminToken(username = "adminKevin", password = "password") {
      const { token } = await this.$axios.$post(
        "http://localhost:8082/api/auth/login",
        {
          username,
          password,
        }
      );
      adminToken = token;
    },
    removeErrorInput(input) {
      input.hasError = false;
      input.errorMessages ? (input.errorMessages = []) : (input.errors = []);
    },
    verifyLoginOnEnter(e) {
      if (e.key === "Enter") {
        this.loginForm();
      }
    },
    verifyRegisterOnEnter(e) {
      if (e.key === "Enter") {
        this.registerForm();
      }
    },
    signOut() {
      this.settingsMenu = false;
      localStorage.removeItem("token");
      this.$store.commit("registerMetaUser", {
        metaUser: false,
        isAdmin: false,
      });
    },
    async loginForm() {
      if (this.layoutLogin.step == 1) {
        return await this.verifyEmailUserId();
      }

      if (this.layoutLogin.step == 2) {
        const hasVerified = await this.verifyPassword();
        if (hasVerified) {
          this.layoutLogin.step = 1;
          this.layoutLogin.show = false;
          this.layoutLogin.success = true;
          this.layoutLogin.email_userId.value = "";
          this.layoutLogin.password.value = "";
        }
        return;
      }
    },
    async registerForm() {
      if (this.layoutRegister.step == 1) {
        await this.verifyEmailRegister();
        return;
      }

      if (this.layoutRegister.step == 2) {
        await this.verifyUserIdRegister();
        this.verifyName(this.layoutRegister.firstName);
        this.verifyName(this.layoutRegister.secondName);
        this.verifyBirthDate();
        this.verifyPasswordRegister();
        return;
      }

      const data = {
        email: this.layoutRegister.email.value,
        userId: this.layoutRegister.userId.value,
        givenName: this.layoutRegister.firstName.value,
        familyName: this.layoutRegister.secondName.value,
        birthDate: this.layoutRegister.secondName.value,
        password: this.layoutRegister.password.value,
      };

      try {
        const monda = await this.$axios.$post(
          "http://localhost:8082/api/users",
          data
        );
        console.log("ayudame po boludo", monda);
        this.layoutRegister.success = true;
        this.layoutRegister.fail = false;
      } catch (err) {
        this.layoutRegister.success = false;
        this.layoutRegister.fail = true;
      }
    },
    async verifyEmailUserId() {
      const emailUser = this.layoutLogin.email_userId;

      const [isEmpty, isInLength, isEmail, isAlphanum] = [
        validator.isEmpty(emailUser.value ?? ""),
        validator.isLength(emailUser.value ?? "", { min: 3, max: 15 }),
        validator.isEmail(emailUser.value ?? "", {
          domain_specific_validation: true,
        }),
        validator.isAlphanumeric(emailUser.value ?? "", undefined, {
          ignore: "_-.",
        }),
      ];

      this.removeErrorInput(emailUser);
      let metaUser;

      if (isEmpty) {
        emailUser.errorMessages.push("This field must not be empty");
        return (emailUser.hasError = true);
      }

      if (isEmail) {
        metaUser = await this.existsMetaUserByEmail(emailUser.value);
        if (!metaUser.length) {
          emailUser.errorMessages.push("This email is not in our database");
          return (emailUser.hasError = true);
        }
        return (this.layoutLogin.step = 2);
      }

      if (!isAlphanum) {
        emailUser.errorMessages.push(
          "userId values are alphanumerics and allow _-."
        );
        return (emailUser.hasError = true);
      }

      if (isAlphanum && !isInLength) {
        emailUser.errorMessages.push(
          "userId values are 3-15 characters length"
        );
        return (emailUser.hasError = true);
      }

      metaUser = await this.existsMetaUserByUserId(emailUser.value);

      if (metaUser) {
        this.layoutLogin.tempUser = metaUser;
        return (this.layoutLogin.step = 2);
      } else {
        emailUser.errorMessages.push("This userId is not in our database");
        return (emailUser.hasError = true);
      }
    },
    async verifyEmailRegister() {
      if (this.layoutRegister.step == 1) {
        const newEmail = this.layoutRegister.email;

        const [isEmpty, isEmail] = [
          validator.isEmpty(newEmail.value ?? ""),
          validator.isEmail(newEmail.value ?? "", {
            domain_specific_validation: true,
          }),
        ];

        this.removeErrorInput(newEmail);

        if (isEmpty) {
          newEmail.errors.push("This field must not be empty");
          return (newEmail.hasError = true);
        }

        if (isEmail) {
          const metaUser = await this.existsMetaUserByEmail(newEmail.value);
          if (metaUser.length) {
            newEmail.errors.push("This email is already used.");
            return (newEmail.hasError = true);
          }
          return (this.layoutRegister.step = 2);
        } else {
          newEmail.errors.push("This is not a correct email format");
          return (newEmail.hasError = true);
        }
      }
    },
    async verifyUserIdRegister() {
      const userId = this.layoutRegister.userId;

      this.removeErrorInput(userId);

      const [isEmpty, isInLength, isAlphanumeric] = [
        validator.isEmpty(userId.value ?? ""),
        validator.isLength(userId.value ?? "", { min: 3, max: 15 }),
        validator.isAlphanumeric(userId.value ?? "", undefined, {
          ignore: "._-",
        }),
      ];

      if (isEmpty) {
        userId.errors.push(`userId value is required`);
        return (userId.hasError = true);
      }
      if (!isInLength) {
        userId.errors.push(`userId value must be between 3-15 characters`);
        return (userId.hasError = true);
      }
      if (isAlphanumeric) {
        const user = await this.existsMetaUserByUserId(userId.value);
        if (!!user) {
          userId.errors.push(`Id ${userId.value} is already taken.`);
          userId.hasError = true;

          return;
        }
      } else {
        userId.errors.push(
          `userId field value must be alphanumric and can contain _-.`
        );
        userId.hasError = true;

        return;
      }
    },
    verifyName(nameInput) {
      console.log(nameInput);
      const [isEmpty, isAlphanumeric, isMaxLength] = [
        validator.isEmpty(nameInput.value ?? ""),
        validator.isAlphanumeric(nameInput.value ?? "", "es-ES", {
          ignore: " ",
        }),
        validator.isLength(nameInput.value ?? "", { max: 21 }),
      ];

      if (isEmpty) {
        nameInput.errors.push(`This value must not be empty`);
        nameInput.hasError = true;

        return;
      }
      if (!isAlphanumeric) {
        nameInput.errors.push(
          `This value must be alphanumeric (ñ) and it allows spaces`
        );
        nameInput.hasError = true;

        return;
      }
      if (!isMaxLength) {
        nameInput.errors.push(`This value must be maximum 21 characters`);
        nameInput.hasError = true;

        return;
      }
    },
    verifyBirthDate() {
      const birth = this.layoutRegister.birth;

      this.removeErrorInput(birth);

      if (validator.isEmpty(birth.value ?? "")) {
        birth.errors.push(`Birth date is required.`);
        birth.hasError = true;

        return;
      }
    },
    verifyPasswordRegister() {
      const password = this.layoutRegister.password;

      this.removeErrorInput(password);

      const [isEmpty, isInLength] = [
        validator.isEmpty(password.value ?? ""),
        validator.isLength(password.value ?? "", { min: 6, max: 30 }),
      ];

      if (isEmpty) {
        password.errors.push(`Password value must not be empty`);
        return (password.hasError = true);
      }

      if (!isInLength) {
        password.errors.push(`Password value must be between 6-30 characters`);
        return (password.hasError = true);
      }
    },
    async verifyPassword() {
      this.removeErrorInput(this.layoutLogin.password);
      try {
        const { metaUser, isAdmin, token } = await this.$axios.$post(
          "http://localhost:8082/api/auth/login",
          {
            email: this.layoutLogin.tempUser.email,
            password: this.layoutLogin.password.value,
          }
        );

        this.$store.commit("registerMetaUser", {
          metaUser,
          isAdmin,
        });

        localStorage.setItem("token", token);

        this.socketMethods();

        return true;
      } catch (err) {
        this.layoutLogin.password.errorMessages.push(
          `Password does not match with ${this.layoutLogin.email_userId.value} account.`
        );
        this.layoutLogin.password.hasError = true;
        return false;
      }
    },
    forgotPassword() {
      this.layoutLogin.step = 1;
      this.layoutLogin.password.forgot = undefined;
      this.layoutLogin.password.forgotSent = true;
      this.layoutLogin.password.forgotDisabled = true;
    },
    async existsMetaUserByEmail(email) {
      const [user, admin] = await Promise.all([
        this.$axios.$get("http://localhost:8082/api/users", {
          params: { email },
        }),
        this.$axios.$get("http://localhost:8082/api/admins", {
          headers: { "x-token": adminToken },
          params: { email },
        }),
      ]);
      return user ?? admin;
    },
    async existsMetaUserByUserId(userId) {
      try {
        const dbUser = await this.$axios.$get(
          `http://localhost:8082/api/users/${userId}`
        );

        return dbUser;
      } catch (err) {
        try {
          const dbAdmin = await this.$axios.$get(
            `http://localhost:8082/api/admins/${userId}`,
            {
              headers: { "x-token": adminToken },
            }
          );
          return dbAdmin;
        } catch (error) {
          return false;
        }
      }
    },
    sortMessages(Amessages, Bmessages) {
      let a = 0,
        b = 0;

      const sortedMessages = [];

      while (a < Amessages.length || b < Bmessages.length) {
        if (
          b == Bmessages.length ||
          new Date(Amessages[a]?.sentDate).getTime() <
            new Date(Bmessages[b]?.sentDate).getTime()
        ) {
          sortedMessages.push(Amessages[a++]);
        } else {
          sortedMessages.push(Bmessages[b++]);
        }
      }

      return sortedMessages;
    },
    async sendMessage(ev) {
      if (
        (ev.target.localName == "textarea" && ev.key == "Enter") ||
        (ev.type == "click" && this.chats.newMessage.length)
      ) {
        ev.preventDefault();
        const message = {
          transmitter: this.$store.state.metaUser._id,
          receiver: this.chats.selectedChatUser._id,
          text: this.chats.newMessage,
          isLiked: false,
          isEdited: false,
          isHidden: false,
          sentDate: new Date().toISOString(),
        };
        this.chats.recentMessages.unshift(message);
        socket.emit("send-message", {
          message,
        });
        this.chats.newMessage = "";
      }
    },
    updateRecentsMessages() {
      this.chats.recents.forEach(async (user) => {
        const { fromMe, fromUserToMe } = await this.getSelectedUserMessages(
          user
        );
        const userMessages = {
          user: user._id,
          messages: this.sortMessages(fromMe, fromUserToMe).reverse(),
          unseenMessages: 0,
        };
        this.chats.recentsWithUser.push(userMessages);
      });
    },
    async getSelectedUserMessages(metaUser) {
      const [fromMe, fromUserToMe] = await Promise.all([
        this.$axios.$get(`http://localhost:8082/api/chats`, {
          params: {
            to: metaUser._id,
            from: this.$store.state.metaUser._id,
          },
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }),
        this.$axios.$get(`http://localhost:8082/api/chats`, {
          params: {
            from: metaUser._id,
            to: this.$store.state.metaUser._id,
          },
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }),
      ]);
      return { fromMe, fromUserToMe };
    },
    async selectActiveUser(item) {
      this.chats.selectedChatUser = item;
      this.tab = "chat";
      const { fromMe, fromUserToMe } = await this.getSelectedUserMessages(item);
      this.chats.recentMessages = this.sortMessages(fromMe, fromUserToMe);
    },
    checkRoles(managementItem) {
      for (const role in managementItem.roles) {
        if (
          managementItem.roles[role] != this.$store.state.metaUser.roles[role]
        )
          return false;
      }
      return true;
    },
  },
  watch: {
    loginEmailUserId() {
      this.removeErrorInput(this.layoutLogin.email_userId);
      this.layoutLogin.password.forgot = 2;
      this.layoutLogin.password.forgotSent = false;
      this.layoutLogin.password.forgotDisabled = false;
    },
    loginPassword() {
      this.removeErrorInput(this.layoutLogin.password);
    },
    selectedChatUser(newValue, oldValue) {
      if (this.chats.recents.some((recent) => recent._id == newValue._id)) {
        const { messages } = this.chats.recentsWithUser.find(
          (userMes) => userMes.user == newValue._id
        );
        this.chats.recentMessages = messages;
      } else {
        this.chats.recentMessages = [];
      }
    },
    registerEmail() {
      this.removeErrorInput(this.layoutRegister.email);
    },
    registerUserId() {
      this.removeErrorInput(this.layoutRegister.userId);
    },
    registerFirstName() {
      this.removeErrorInput(this.layoutRegister.firstName);
    },
    registerSecondName() {
      this.removeErrorInput(this.layoutRegister.secondName);
    },
    registerBirthDate() {
      this.removeErrorInput(this.layoutRegister.birth);
    },
    registerPass() {
      this.removeErrorInput(this.layoutRegister.password);
    },
  },
};
</script>

<style>
#thumbProfilePhoto {
  background-color: #00000033;
  transition: all 0.3s ease-in-out;
}
#thumbProfilePhoto:hover {
  background-color: #00000077;
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
* {
  scrollbar-width: thin;
}
a:hover {
  text-decoration: none;
}
</style>
