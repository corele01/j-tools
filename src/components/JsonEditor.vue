<template>
  <div>
      <div id="jsoneditor" style="width: 400px; height: 200px"></div>
  </div>
</template>

<script>
export default {
    name:'JsonEditor',
    props:{
        value:Object
    },
    data(){
        return{
            jsoneditor: null
        }
    },
    watch: {
        value(value){
            const editorValue = this.jsoneditor.get();
            if (value !== editorValue){
                this.jsoneditor.set(value)
            }
        }
    },
    mounted(){
        this.initJsonEditor();
    },
    methods:{
        initJsonEditor(){
            var container = document.getElementById("jsoneditor");
            var options = {
                mode: "tree"
            };
            var editor = new this.$jsoneditor(container, options);
            this.jsoneditor = editor;
        },
        getValue() {
            return this.jsonEditor.get();
        }
    }
}
</script>

<style>

</style>