<template>
  <div>
      <div class="json-class">
          <vue-json-editor :showBtns="false" lang="zh" v-model="josnEditor" search="false" mainMenuBar="false"/>
      </div>
  </div>
</template>

<script>
import VueJsonEditor from 'vue-json-editor'
export default {
    name:'JsonFormat',
    components:{
        VueJsonEditor,
    },
    data(){
        return{
            josnEditor:{
                mode:'all'
            }
        }    
    },
    created(){
        window.console.log(process.env.VUE_APP_API_URL)
    }
}
</script>

<style lang="scss" scoped>
    .json-class{
        width: 100%;
        /deep/.jsoneditor-vue{
            height:700px;
        }
        /deep/.json-save-btn{
            cursor: pointer;
        }
    }
</style>