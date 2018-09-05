<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>登录窗口</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="账号"
                    type="text">
                  </v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="密码"
                    id="password"
                    type="password">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="$router.go(-1)">取消</v-btn>
                <v-btn color="primary">登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "Login",
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

<style scoped>

</style>
