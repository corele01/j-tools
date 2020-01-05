<template>
    <div>
        <a-row>
          <a-col :span="18">
              <a-card style="">
                  <a-row class="dateHeader">
                    <a-col :span="6">当前年份：{{nowYear}}</a-col>
                    <a-col :span="4">{{leapStr}}</a-col>
                  </a-row>
              </a-card>
              <a-card style="margin-top:10px;">
                  <a-row>
                    <a-col :span="2" v-for="y in yearList" :key="y">
                        <a-button @click="toYear(y)">{{y}}</a-button>
                    </a-col>
                  </a-row>
                <a-row style="margin-top:15px">
                    <a-col :span="2" style="font-size:16px;line-height:35px;height:20px;"><a-icon type="calendar" theme="twoTone" />  年份</a-col>
                    <a-col :span="4">
                        <a-input type="number" style="font-family: 'Courier New', Courier, monospace;" v-model="inputYear"></a-input>
                    </a-col>
                    <a-col :span="2" style="margin: auto 0;text-align:center">
                        <a-button shape="circle" icon="right" @click="toBuildYear"></a-button>
                    </a-col>
                    <a-col :span="4"> 
                        <a-input style="font-family: 'Courier New', Courier, monospace;" v-model="inputLeap"></a-input>
                    </a-col>
                </a-row>
              </a-card>
              <a-collapse style="margin-top:15px;" v-model="activePanel">
              <a-collapse-panel key="code" header="Java8">
                    <CodeEditor :value="codeEdit"></CodeEditor>
              </a-collapse-panel>
            </a-collapse>
          </a-col>
          <a-col :span="6"></a-col>
        </a-row>
    </div>
</template>
<script>
import CodeEditor from '@/components/CodeEditor.vue'
import {getCodeExample} from '@/api/codeApi.js'
export default {
    name:'LeapYear',
    components:{
        CodeEditor
    },
    data(){
        return{
            nowYear:'0000',
            leapStr:'',
            inputYear:'',
            inputLeap:'',
            yearList:[2000],
            activePanel:['code'],
            codeEdit:'sss'
        }
    },
    methods:{
        init(){
            this.nowYear = this.getYear();
            const ys = this.buildYear(this.nowYear);
            if (ys){
                this.leapStr = '闰年'
            }else {
                this.leapStr = '平年'
            }
            const lastYear = this.nowYear - 4;
            var list = new Array();
            for (var i = lastYear ; i< lastYear+10; i++){
                list.push(i)
                
            }
            this.yearList = list;

            getCodeExample(2).then(res =>{
                this.codeEdit = res.data.codeExample;
            })
        },
        getYear(){
            const nowDate = new Date();
            return nowDate.getFullYear();
        },
        buildYear(year){
            if (year === undefined){
                return false;
            }
            if (year % 4 == 0 && year % 100 != 0){
                return true;
            }
            if (year % 400 == 0){
                return true;
            }
            return false;
        },
        toBuildYear(){
            const ys = this.buildYear(this.inputYear);
            if (ys){
                this.inputLeap = '闰年'
            }else {
                this.inputLeap = '平年'
            }
        },
        toYear(year){
            this.inputYear = year;
            this.toBuildYear();
        }
    },
    created(){
        this.init();
    }
}
</script>
<style scoped>
.dateHeader{
        font-size: 16px;
        font-family: 'Courier New', Courier, monospace;
    }
</style>