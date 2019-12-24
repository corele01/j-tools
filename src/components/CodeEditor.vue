<template>
    <codemirror v-model="codeText"></codemirror>
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
        content:String
    },
    data(){
        return{
            codeText:''
        }
    },
    created(){
        this.codeText = this.content;
    }
}
</script>