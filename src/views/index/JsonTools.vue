<template>
    <div class="body">
        <LatticeTable v-bind="toolsListData"/>
    </div>
</template>
<script>
import LatticeTable from '@/components/LatticeTable'
export default {
    name:'JsonTools',
    components:{
        LatticeTable
    },
    data(){
        return{
            toolsListData:undefined
        }
    },
    methods:{
        init(){
            this.toolsListData={
                listGutter:8,
                listCols:6,
                listData:[{
                    id:1,
                    title:'Json格式化',
                    subTitle: 'Json格式化',
                    gotoPath:'/jsonFormat'
                }]
            }
        }
    },
    created(){
        this.init();
    }
}
</script>
<style scoped>
    .body{
        padding: 5px;
    }
</style>