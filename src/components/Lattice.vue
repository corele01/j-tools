<template>
     <a-card hoverable style="" @click="goto">
        <!-- <img alt="加载中" src="../assets/loading.png" slot="cover" style="height:147px"/> -->
        <a-card-meta :title='title'>
            <template slot="description">{{subTitle}}</template>
        </a-card-meta>
    </a-card>
</template>
<script>
export default {
    name:'Lattice',
    props:{
        backgroundImg:String,
        url:String,
        title:String,
        subTitle:String,
        gotoPath:String
    },
    data(){
        return{
            routePath:''
        }
    },
    methods:{
        init(){
            this.routePath=this.gotoPath;
        },
        goto(){
            this.$router.push({path:this.gotoPath});
        }
    },
    created(){
        // window.console.log('The Lattice is created.')
        this.init()
        // window.console.log(this.gotoPath);

    },
    mounted(){
        // window.console.log('The Lattice is mounted.')
    }
}
</script>