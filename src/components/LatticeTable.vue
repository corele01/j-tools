<template>
    <div>
        <a-row :gutter='listGutter' v-for="row in rowsData" :key="row.index">
            <a-col v-for="item in row" :key='item.id' :span="24/listCols">
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
    data(){
        return{
            rowsData:[
                [
                    {
                        id:1,
                        title:'This is test page.'
                    }
                ]
            ]
        }
    },
    created(){
        window.console.log(this.listData)
        window.console.log(this.listGutter)
        var rowsArray = new Array();
        var cols = this.listCols;
        const list = this.listData;
        const listLen = list.length;
        var rows = parseInt(listLen/ cols);
        if (listLen % cols > 0){
            rows = rows + 1;
        }

        for (var i = 0 ; i < rows ; i++ ){
            var rowArray = new Array();
            for (var j = 0 ; j < cols ; j ++){
                const item = list.pop();
                if (item == undefined){
                    break;
                }
                rowArray.push(item);
            }
            rowsArray.push(rowArray);
        }
        this.rowsData = rowsArray;
    }
}
</script>