<template>
     <a-card hoverable style="width:240px;height:240px">
        <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="cover" style="height:147px"/>
        <a-card-meta title="Europe Street beat">
            <template slot="description">{{title}}</template>
    </a-card-meta>
    </a-card>
</template>
<script>
export default {
    name:'Lattice',
    props:{
        background:String,
        url:String,
        title:String
    },
    methods:{
        init(){
            // window.console.log(this.background)
        }
    },
    created(){
        // window.console.log('The Lattice is created.')
        this.init()
    },
    mounted(){
        // window.console.log('The Lattice is mounted.')
    }
}
</script>