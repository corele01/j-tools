<template>
    <div>
        <a-row>
            <a-col :span="2" class="logo"><span><b>J-TOOLS</b></span></a-col>
            <a-col :span="21">
                <a-menu mode="horizontal" v-model="current" @click="goto('/')">
                    <a-menu-item key="tools">
                        <a-icon type="calendar" theme="twoTone"/>时间工具
                    </a-menu-item>
                </a-menu>
            </a-col>
        </a-row>
        <router-view style="padding:10px"/>
    </div>
</template>
<script>
export default {
    name:'Index',
    data(){
        return{
            current:["tools"]
        }
    },
    methods:{
        goto(path){
            this.$router.push(path)
        }
    }
}
</script>
<style scoped>
    .logo{
        text-align:center;
        line-height:48px;
        font-size:16px;
        border-bottom: 1px solid #e8e8e8;
        width:130px;
        margin-left: 5px;
    }
</style>