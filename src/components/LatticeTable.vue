<template>
    <div>
        <a-row :gutter='listGutter'>
            <a-col v-for="item in listData" :key='item.id' :span="24/listCols">
                <Lattice :title="item.title"/>
            </a-col>
        </a-row>
    </div>
    
</template>
<script>
import Lattice from '@/components/Lattice'
export default {
    name:'LatticeTable',
    components:{
        Lattice
    },
    props:{
        listGutter:Number,
        listData:Array,
        listCols:Number
    },
    created(){
        window.console.log(this.listData)
        window.console.log(this.listGutter)
    }
}
</script>