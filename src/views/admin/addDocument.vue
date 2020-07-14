<template>
  <div>
    <a-card class="top">
      <a-row>
        <a-col :span="2">标题</a-col>
        <a-col :span="22">
          <a-input v-model="title" placeholder="请输入标题"></a-input>
        </a-col>
      </a-row>
      <a-row class="top_row">
        <a-col :span="2">类别</a-col>
        <a-col :span="22">
          <a-select
            mode="multiple"
            :default-value=documentTypeArr
            style="width: 100%"
            placeholder="请选择类别"
            @change="handleChange"
          >
            <a-select-option
              v-for="item in documentTypeSourceArray"
              :key="item.id"
            >{{ item.typeName }}</a-select-option>
          </a-select>
        </a-col>
      </a-row>
    </a-card>

    <a-row class="content">
      <a-col :span="24">
        <vue-ueditor-wrap v-model="content" :config="editorConfig"></vue-ueditor-wrap>
      </a-col>
    </a-row>

    <a-card class="bottom">
      <a-row>
        <a-col :span="2">备注</a-col>
        <a-col :span="22">
          <a-input v-model="remark"></a-input>
        </a-col>
      </a-row>
      <a-row class="bottom_row">
        <a-col :span="24">
          <a-button-group>
            <a-button type="primary" icon="check" @click="submitDoc">提交</a-button>
            <a-button icon="close" >取消</a-button>
          </a-button-group>
          
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
import { addDocument } from "../../api/documentApi"
export default {
  name: "addDocument",
  components: {
    VueUeditorWrap
  },
  data() {
    return {
      editorConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        // serverUrl: this.$config.baseUrl + 'ueditor/ueditorConfig',
        // serverUrl: 'http://localhost:8090/ueditor/ueditorConfig',
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/ue/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 500,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 关闭自动保存
        enableAutoSave: true
      },
      content: "",
      title: "",
      documentType: undefined,
      documentTypeArr:[],
      documentTypeSourceArray:[{
        id:1,
        typeName:'Java'
      },{
        id:2,
        typeName:'Go'
      }],
      remark:''
    };
  },
  methods: {
    submitDoc(){
      addDocument({
        title: this.title,
        content: this.content
      }).then(res => {
        window.console.log(res)
      })
    },
    handleChange(){

    }
  }
};
</script>

<style>
.top {
  margin-top: 5px;
}
.content {
  margin-top: 2px;
}
.top_row {
  margin-top: 5px;
}
.bottom_row{
  margin-top: 20px;
}
.bottom{
  margin-top: 5px;
}
</style>