<template>
    <div>
        <h1>This is Test</h1>
        <hr/>
        <LatticeTable  :listGutter='9' :listCols='4'/>
    </div>
</template>
<script>
import LatticeTable from '@/components/LatticeTable'
export default {
    name:'test',
    components:{
        LatticeTable
    },
    data(){
        return{
            list:[
                {
                    id:1,
                    title:'尘世'
                },
                {
                    id:2,
                    title:'尘世'
                },
                {
                    id:3,
                    title:'尘世'
                },
                {
                    id:4,
                    title:'尘世'
                },
                {
                    id:5,
                    title:'尘世'
                },
                {
                    id:6,
                    title:'尘世'
                },
                {
                    id:7,
                    title:'尘世'
                },
                {
                    id:8,
                    title:'尘世'
                },

            ]
        }
    }
}
</script>