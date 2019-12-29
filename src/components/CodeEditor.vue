<template>
    <codemirror v-model="codeValue" @changes="codeChange"></codemirror>
</template>
<script>

import { codemirror } from 'vue-codemirror'
  require("codemirror/mode/python/python.js")
  require('codemirror/addon/fold/foldcode.js')
  require('codemirror/addon/fold/foldgutter.js')
  require('codemirror/addon/fold/brace-fold.js')
  require('codemirror/addon/fold/xml-fold.js')
  require('codemirror/addon/fold/indent-fold.js')
  require('codemirror/addon/fold/markdown-fold.js')
  require('codemirror/addon/fold/comment-fold.js')

export default {
    name:'CodeEditor',
    components:{
        codemirror
    },
    props:{
        value:String
    },
    data(){
        return{
            codeValue:this.value
        }
    },
    watch:{
        value(val){
            this.codeValue = val;
        },
        codeValue(val){
            this.$emit("on-result-change",val);
        }
    },
    methods:{
        codeChange(){
            // window.console.log(this.codeValue)
        }
    }
}
</script>