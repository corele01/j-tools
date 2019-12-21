<template>
    <div>
        <a-menu mode="horizontal" v-model="current" @click="goto">
            <a-menu-item key="tools">
                <a-icon type="appstore"/>全部
            </a-menu-item>
        </a-menu>
        <router-view/>
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
        goto(){
            this.$router.push("/")
        }
    }
}
</script>