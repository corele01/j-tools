<template>
    <div>
        <div id="jsoneditor">
            sssss
        </div>
    </div>
</template>
<script>
export default {
    name:'JsonFormat',
    components:{
    },
    data(){
        return{
        }
    },
    methods:{
    },
    created(){
       
    },
    mounted(){
        let edit = document.getElementById('jsoneditor')
        let json = {
            "Array": [1, 2, 3],
            "Boolean": true,
            "Null": null,
            "Number": 123,
            "Object": {"a": "b", "c": "d"},
            "String": "Hello World"
        };
        let options = {
          mode: 'text',
          indentation: 2,
          search: true
        }
        let editor = new this.$jsoneditor(edit, options)
        editor.set(json)
    }
}
</script>