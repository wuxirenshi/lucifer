<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="update"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">徐晓东个人博客</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="搜索"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-speed-dial
      v-model="fab"
      :direction="direction"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        icon
      >
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn color="info" to="/login">登录</v-btn>
    </v-speed-dial>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: "ToolBar",
    props: {
      drawer: Boolean,
      updateDrawer: Function,
    },
    data: ()=>({
      direction: 'bottom',
      fab: false,
    }),
    methods: {
      update() {
        this.updateDrawer(!this.drawer)
      }
    }
  }
</script>

<style scoped>

</style>
