<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-btn fab bottom right color="pink" dark fixed slot="activator">
      <v-icon>add</v-icon>
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="blue"
      :top="true"
    >
      {{message}}
    </v-snackbar>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>博客内容</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.native="saveBlog">保存</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout justify-center align-center>
        <v-form>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  v-model="blog.topic"
                  label="主题"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-select
                  v-model="blog.genre"
                  :items="items"
                  label="类型"
                  required
                ></v-select>
              </v-flex>

              <v-flex>
                <mavon-editor style="height: 500px;" :ishljs="true" v-model="blog.content"></mavon-editor>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
  import {saveBlog} from '../../../api/api'

  export default {
    name: "HideDialog",
    data: () => ({
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      snackbar: false,
      message: '权限不足，请登录！',
      blog: {
        topic: '',
        genre: '',
        content: '',
      },
      items: ['技术分享', '学习积累']
    }),
    methods: {
      saveBlog() {
        const params = Object.assign({}, this.blog);
        saveBlog(params).then(res => {
          if (res.status === 401) {
            this.snackbar = true;
          }
        }).catch(e => {
          console.log(e)
        });
      }
    }
  }
</script>

<style scoped>

</style>
