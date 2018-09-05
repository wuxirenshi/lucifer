<template>
  <v-layout>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="32px" tile>
        <img
          src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
          alt="Vuetify"
        >
      </v-avatar>
    </v-btn>
  </v-layout>
</template>

<script>
  export default {
    name: "ToolBar",
  }
</script>

<style scoped>

</style>
