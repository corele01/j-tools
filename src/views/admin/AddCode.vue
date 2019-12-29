<template>
    <div>
        <CodeEditor v-model="content" @on-result-change='onChange'></CodeEditor>
        <a-button @click="addCodeExample">添加</a-button>
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

</style>