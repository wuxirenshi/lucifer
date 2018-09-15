<template>
  <v-layout justify-center align-center>
    <div v-show="frame_show" style="width: 100%;height: 100%">
      <div style="text-align: left; margin-bottom: 10px">
        <v-btn color="success" @click="doPrintVue">打印</v-btn>
      </div>
      <iframe id="frame" width=100% height=100% frameborder=0 scrolling=auto style="margin-bottom: 40px"
              :src="resume"></iframe>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="blue"
      :top="true"
    >
      {{message}}
    </v-snackbar>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title class="headline blue darken-3" primary-title>验证码</v-card-title>

        <v-card-text>
          <v-form v-model="valid" ref="code">
            <v-text-field
              v-model="code"
              label="验证码"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="handleBack">
            取消
          </v-btn>
          <v-btn color="primary" flat @click="handleCheck">
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: "Resume",
    data: () => ({
      frame_show: false,
      snackbar: false,
      dialog: true,
      valid: false,
      message: '验证码错误，请重新输入！',
      code: '',
      resume: ''
    }),
    methods: {
      handleCheck() {
        if (this.code === '519007') {
          this.resume = 'http://itblog.work/resume';
          this.frame_show = true;
          this.dialog = false;
        }
        else {
          this.snackbar = true
        }
      },
      handleBack() {
        this.dialog = false;
        this.$router.go(-1)
      },
      doPrintVue() {
        const iframe = document.getElementById('frame');
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      }
    }
  }
</script>

<style scoped>

</style>
