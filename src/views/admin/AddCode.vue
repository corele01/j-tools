<template>
    <div>
        <a-input></a-input>
        <CodeEditor v-model="content" @on-result-change='onChange' class="edit"></CodeEditor>
        <a-button @click="addCodeExample" style="margin-top:10px">添加</a-button>
    </div>
    
</template>

<script>
    import CodeEditor from '@/components/CodeEditor.vue'
    import {addCodeExample} from '@/api/codeApi.js'
    export default {
        name: "AddCode",
        components:{
            CodeEditor
        },
        data(){
            return{
                content:''
            }
        },
        methods:{
            addCodeExample(){
                window.console.log(this.content)
                addCodeExample({
                    codeType:1,
                    codeExample:this.content
                }).then(res=>{
                    window.console.log(res)
                })
            },
            onChange(val){
                this.content = val;
            }
        }
    }
</script>

<style scoped>
    .edit{
        margin-top:10px;
        border: 1px solid #55b9f3;
    }
</style>