<template>
    <div>
        <a-row>
            <a-col :span="2" class="logo" @click="goto('/admin')"><span><b>J-TOOLS</b></span></a-col>
            <a-col :span="21">
                <a-menu mode="horizontal" v-model="current">
                    <a-menu-item key="dateTools" @click="goto('/admin/code')">
                        <a-icon type="calendar" />addCode
                    </a-menu-item>
                     <a-menu-item key="addDocument" @click="goto('/admin/addDocument')">
                        <a-icon type="calendar" />addDocument
                    </a-menu-item>
                </a-menu>
            </a-col>
        </a-row>
        <router-view style="padding:10px"/>
    </div>   
</template>
<script>
export default {
    name:"Index",
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
        cursor: pointer;
    }
</style>