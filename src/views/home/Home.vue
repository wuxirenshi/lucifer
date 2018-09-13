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
    <tool-bar :drawer="drawer" :updateDrawer="updateDrawer"></tool-bar>
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
    }),
    methods: {
      updateDrawer(value){
        this.drawer = value
      }
    }
  }
</script>
