<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-btn fab bottom right color="pink" dark fixed slot="activator">
            <v-icon>add</v-icon>
        </v-btn>
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click.native="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>博客内容</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click.native="dialog = false">保存</v-btn>
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
    export default {
        name: "HideDialog",
        data: () => ({
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            blog: {
                topic: '',
                genre: '',
                content: '',
            },
            items: ['技术分享', '学习积累']
        })
    }
</script>

<style scoped>

</style>
