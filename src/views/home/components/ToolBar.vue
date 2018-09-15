<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="update"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">个人博客</span>
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
    <div>{{current_week}}</div>
    <v-speed-dial
      v-model="fab"
      :direction="direction"
      open-on-hover
    >
      <v-btn
        slot="activator"
        v-model="fab"
        icon
      >
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn
        color="info"
        to="/login"
        small
      >
        登录
      </v-btn>
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
      current_week: '',
    }),
    methods: {
      update() {
        this.updateDrawer(!this.drawer)
      },
      updateWeek() {
        const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        const cd = new Date();
        this.current_week = week[cd.getDay()];
      },
    },
    mounted(){
      this.updateWeek()
    }
  }
</script>

<style scoped>

</style>
