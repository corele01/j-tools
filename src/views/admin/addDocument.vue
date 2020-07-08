<template>
  <div>
        <Ueditor :value="ueditor.value" :config="ueditor.config" ref="ue"></Ueditor>
        <input type="button" value="显示编辑器内容（从控制台查看）" @click="returnContent">
  </div>
</template>

<script>
import Ueditor  from '../../components/ueditor'
export default {
    name:"addDocument",
    components:{
        Ueditor 
    },
    data() {
        return {
            dat: {
                content: "",
            },
            ueditor: {
                value: "编辑默认文字",
                config: {}
            }
        };
    },
    methods: {
        returnContent() {
            this.dat.content = this.$refs.ue.getUEContent();
        },
        showContent() {
            this.show = !this.show;
        }
    },
}
</script>

<style>

</style>