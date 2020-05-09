<template>
  <div>
      <a-card>
          This is jsonFormat Page.
      </a-card>
      <div class="json-class">
          <vue-json-editor :showBtns="false" lang="zh" v-model="josnEditor" mode="code" search="false" mainMenuBar="false"/>
      </div>
      
  </div>
</template>

<script>
import VueJsonEditor from 'vue-json-editor'
export default {
    name:'JsonFormat',
    components:{
        VueJsonEditor
    },
    data(){
        return{
            josnEditor:{
                mode:'tree'
            }
        }    
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