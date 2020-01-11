<template>
    <div>
        <CodeEditor :value="codeEdit" @on-result-change='onChange'></CodeEditor>
        <a-button @click="jsonFormat">格式化</a-button>
    </div>
</template>
<script>
import CodeEditor from '@/components/CodeEditor.vue'
import {format} from '@/api/jsonApi'
export default {
    name:'JsonFormat',
    components:{
        CodeEditor
    },
    data(){
        return{
            codeEdit:''
        }
    },
    methods:{
        jsonFormat(){
            var code = encodeURI(this.codeEdit);
            format(code).then(res => {
                if(res.code == 0 ){
                    this.codeEdit = this.codeEdit
                }else{
                    this.codeEdit = res.data;
                }
                
            })
        },
        onChange(val){
            this.codeEdit= val;
        }
    },
    created(){
        
    }
}
</script>