<template>
    <div class="body">
        <a-row>
          <a-col :span="18">
              <a-card>
            <a-row class="dateHeader">
                <a-col :span="4"><a-icon type="global"/> 现在时间：</a-col>
                <a-col :span="6">{{nowDateFormat}}</a-col>
                <a-col :span="6">{{nowDateIntTime}} ms</a-col>
                <a-col :span="6">{{nowWeek}} Week</a-col>
            </a-row>
        </a-card>
        <a-card style="margin-top:10px">
            <a-row>
                <a-col :span="3" style="font-size:16px;">
                    <a-icon type="code" />  时间戳
                </a-col>
                <a-col :span="6">
                    <a-input v-model="dateFormatStr" style="font-family: 'Courier New', Courier, monospace;"></a-input>
                </a-col>
                <a-col :span="2" style="margin: auto 0;text-align:center">
                    <a-button shape="circle" icon="right" @click="toMs"></a-button>
                </a-col>
                <a-col :span="6">
                    <a-input v-model="dateFormatMs" style="font-family: 'Courier New', Courier, monospace;">
                        <a-select slot="addonAfter" defaultValue="ms" v-model="msType" @change="msTypeChange">
                          <a-select-option value="ms">ms</a-select-option>
                          <a-select-option value="s">s</a-select-option>
                        </a-select>
                    </a-input>
                </a-col>
            </a-row>
            <a-row style="margin-top:15px;">
                <a-col :span="3" style="font-size:16px;">
                    <a-icon type="code" />  日期时间
                </a-col>
                <a-col :span="6">
                    <a-input v-model="dateMs" style="font-family: 'Courier New', Courier, monospace;">
                        <a-select slot="addonAfter" defaultValue="ms" v-model="msType">
                          <a-select-option value="ms">ms</a-select-option>
                          <a-select-option value="s">s</a-select-option>
                        </a-select>
                    </a-input>
                </a-col>
                <a-col :span="2" style="margin: auto 0;text-align:center">
                    <a-button shape="circle" icon="right" @click="toTime"></a-button>
                </a-col>
                <a-col :span="6">
                    <a-input v-model="dateMsDate" style="font-family: 'Courier New', Courier, monospace;"></a-input>
                </a-col>
            </a-row>
        </a-card>
          </a-col>
        </a-row>
        
    </div>
</template>
<script>
export default {
    name:'DateTools',
    data(){
        return{
            nowDateFormat:undefined,
            nowDateIntTime:undefined,
            nowWeek:undefined,
            dateFormatStr:undefined,
            dateFormatMs:undefined,
            msType:'ms',
            dateMs:undefined,
            dateMsDate:undefined
        }
    },
    methods:{
        init(){
            var date = new Date();
            this.roadingDate();
            this.nowWeek = this.getWeek(date);
            this.dateFormatStr = this.nowDateFormat;
            this.dateMs = date.getTime();
        },
        toTime(){
            if (this.dateMs.length < 5){
                return;
            }
            var ms = this.dateMs;
            if (this.msType === "s"){
                ms = ms + "0000";
            }
            var date = new Date();
            date.setTime(ms);
            this.dateMsDate = this.formatDate("YYYY-mm-dd HH:MM:SS",date);
        },
        msTypeChange(){
            if (this.dateFormatMs.length < 5){
                return;
            }
            this.toMs();
        },
        toMs(){
            var dateStr = this.dateFormatStr;
            if (dateStr === undefined || dateStr.length <= 0){
                this.dateFormatMs = undefined;
                this.$message.warning('请输入日期');
                return;
            }
            var date = new Date(dateStr);
            if (this.msType === "ms"){
                this.dateFormatMs = date.getTime();
            }else if (this.msType === "s"){
                this.dateFormatMs = parseInt(date.getTime()/1000)
            }
            
        },
        roadingDate(){
            var nowDate = new Date();
            this.nowDateFormat = this.formatDate("YYYY-mm-dd HH:MM:SS",nowDate);
            this.nowDateIntTime = nowDate.getTime();
        },
        formatDate(fmt,date){
            let ret;
            let opt = {
                "Y+": date.getFullYear().toString(),        // 年
                "m+": (date.getMonth() + 1).toString(),     // 月
                "d+": date.getDate().toString(),            // 日
                "H+": date.getHours().toString(),           // 时
                "M+": date.getMinutes().toString(),         // 分
                "S+": date.getSeconds().toString()          // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (let k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                }
            }
            return fmt;
        },
        getWeek(dt){
            let d1 = new Date(dt);
            let d2 = new Date(dt);
            d2.setMonth(0);
            d2.setDate(1);
            let rq = d1-d2;
            let days = Math.ceil(rq/(24*60*60*1000));
            let num = Math.ceil(days/7);
            return num;
        }
    },
    created(){
        this.init();
    },
    mounted(){
        var that = this;
        window.setInterval(function(){
            that.roadingDate()
        },1000)
    }
}
</script>
<style scoped>
    .body{
        padding: 10px;
    }
    .dateHeader{
        font-size: 16px;
        font-family: 'Courier New', Courier, monospace;
    }
</style>