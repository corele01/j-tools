<template>
    <div class="body">
        <LatticeTable v-bind="toolsListData"/>
    </div>
</template>
<script>
import LatticeTable from '@/components/LatticeTable'
export default {
    name:'Main',
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
                    title:'时间戳工具',
                    subTitle:'时间戳工具',
                    gotoPath:'/dateTools'
                },{
                    id:2,
                    title:'闰年计算',
                    subTitle:'闰年计算',
                    gotoPath:'/leapYear'
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