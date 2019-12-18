<template>
    <div>
        <h1>This is Lattice</h1>
        <h2>{{background}}</h2>
        <h2>{{url}}</h2>
        <h2>{{title}}</h2>
        <div style="width:30px; height:30px;">
                sss
        </div>
    </div>
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
            window.console.log(this.background)
        }
    },
    created(){
        window.console.log('The Lattice is created.')
        this.init()
    },
    mounted(){
        window.console.log('The Lattice is mounted.')
    }
}
</script>