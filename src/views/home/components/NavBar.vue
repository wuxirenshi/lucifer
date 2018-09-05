<template>
  <v-list dense>
    <template v-for="(item, index) in items">
      <v-layout
        v-if="item.heading"
        :key="item.heading"
        row
        align-center
      >
        <v-flex xs6>
          <v-subheader v-if="item.heading">
            {{ item.heading }}
          </v-subheader>
        </v-flex>
        <v-flex xs6 class="text-xs-center">
          <a href="#!" class="body-2 black--text">EDIT</a>
        </v-flex>
      </v-layout>
      <v-list-group
        v-else-if="item.children"
        v-model="item.model"
        :key="item.text"
        :prepend-icon="item.model ? item.icon : item['icon-alt']"
        append-icon=""
      >
        <v-list-tile slot="activator" :to="item.route">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="(child, i) in item.children"
          :key="i"
          :to="item.route"
        >
          <v-list-tile-action v-if="child.icon">
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ child.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <v-divider
        v-else-if="item.divider"
        :key="index"
        dark
      ></v-divider>
      <v-list-tile v-else :key="item.text" :to="item.route">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
  export default {
    name: "NavBar",
    data: () => ({
      message:
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify.js!',
          excerpt: 'Thank you for joining our community...'
        },
      items: [
        {icon: 'home', text: '首页', route: '/main'},
        {divider: true},
        {icon: 'perm_identity', text: '关于我', route: '/about'},
        {icon: 'toc', text: '技术分享', route: '/share'},
        {icon: 'book', text: '学习积累', route: '/accumulate'},
        {divider: true},
        {icon: 'contacts', text: '简历', route: '/resume'},
        {divider: true},
      ]
    })
  }
</script>

<style scoped>

</style>
