<template>
  <v-layout>
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
  </v-layout>
</template>

<script>
  export default {
    name: "ToolBar",
    data: ()=>({
      direction: 'bottom',
      fab: false,
    }),
  }
</script>

<style scoped>

</style>
