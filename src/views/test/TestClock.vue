<template>
    <div>
        <CodeEditor :content='codeText'></CodeEditor>
        <a-button @click="printStr">str</a-button>
    </div>
    
</template>
<script>
import CodeEditor from '@/components/CodeEditor.vue'
export default {
    name:'TestClock',
    components:{
        CodeEditor
    },
    data(){
        return{
            codeText:''
        }
    },
    methods:{
        printStr(){
            window.console.log(this.codeText);
        }
    },
    created(){
        this.codeText='//获取当前时间戳\nlong ms = System.currentTimeMillis();\n\n//取当前时间\nLocalDateTime nowTime = LocalDateTime.now();\n\n//格式 时间为 \'yyyy-MM-dd HH:mm:ss\' 形式\nDateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");\nString format = dateTimeFormatter.format(nowTime);\n\n//将 dateStr 格式化为 localDateTime\nString dateStr="2019-01-02 22:13:10";\nDateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");\nLocalDateTime time = LocalDateTime.parse(dateStr, formatter);\n'
    }
}
</script>