<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <nav-bar></nav-bar>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">徐晓东个人博客</span>
      </v-toolbar-title>
      <tool-bar></tool-bar>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <hide-dialog></hide-dialog>
    <v-footer app fixed>
      <v-layout justify-center row wrap>
        <span>&copy; 苏ICP备<a href="http://www.miitbeian.gov.cn/" style="text-decoration:none">18049712</a>号</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  import HideDialog from "./components/HideDialog";
  import NavBar from "./components/NavBar";
  import ToolBar from "./components/ToolBar";

  export default {
    components: {
      ToolBar,
      NavBar,
      HideDialog,
    },
    data: () => ({
      drawer: null,
    })
  }
</script>
