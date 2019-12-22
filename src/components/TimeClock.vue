<template>
    <canvas id="view" height="300px" width="300px"></canvas>
</template>
<script>
export default {
    name:'TimeClock',
    methods:{
        drawBackground(ctx,width,height,r){
            ctx.translate(r,r);
            ctx.beginPath();
            ctx.lineWidth=10;
            ctx.arc(0,0,r-5,0,2*Math.PI);
            ctx.stroke();
        
            for(var i=0;i<60;i++){
                var x=(r-20)*Math.cos(Math.PI*2/60*i);
                var y=(r-20)*Math.sin(Math.PI*2/60*i);        
                if(i%5===0){
                    ctx.fillStyle="#000000";
                }else{
                    ctx.fillStyle="#cccccc";
                }
                ctx.beginPath();
                ctx.arc(x,y,5,0,2*Math.PI);
                ctx.fill();
            }
            ctx.font="20px Arial";
            ctx.textAlign="center";
            ctx.textBaseline="middle";
            ctx.fillStyle="#000000";
            for(var j=0;j<12;j++){
                var ax=(r-50)*Math.cos(Math.PI*2/12*j);
                var ay=(r-50)*Math.sin(Math.PI*2/12*j);        
                ctx.beginPath();
                ctx.fillText(j>9?j-9:j+3,ax,ay);
                ctx.fill();
            }
        },
        drawHour(hour,minute,second,ctx,width,height,r){
            ctx.save();
            ctx.beginPath();
            var rad=2*Math.PI/12*hour+2*Math.PI/12/60*minute+2*Math.PI/12/60/3600*second;
            ctx.rotate(rad);
            ctx.lineWidth=14;
            ctx.lineCap="round";
            ctx.moveTo(0,20);
            ctx.lineTo(0,-r+100);
            ctx.stroke();
            ctx.restore();
        },
        drawMinute(minute,second,ctx,width,height,r){
            ctx.save();
            ctx.beginPath();
            var rad=2*Math.PI/60*minute+2*Math.PI/3600*second;
            ctx.rotate(rad);
            ctx.lineWidth=10;
            ctx.lineCap="round";
            ctx.moveTo(0,20);
            ctx.lineTo(0,-r+80);
            ctx.stroke();
            ctx.restore();
        },
        drawSecond(second,ctx,width,height,r){
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle="#FF0000";
            var rad=2*Math.PI/60*second;
            ctx.rotate(rad);
            ctx.lineWidth=2;
            ctx.lineCap="round";
            ctx.moveTo(0,30);
            ctx.lineTo(8,0);
            ctx.lineTo(0,-r+30);
            ctx.lineTo(-8,0);
            ctx.lineTo(0,30);
            ctx.fill();
            ctx.restore();
        },
        run(ctx,width,height,r){
            ctx.clearRect(0,0,width,height);
            ctx.save();
            var time =new Date();
            var hour=time.getHours();
            var minute=time.getMinutes();
            var second=time.getSeconds();
            this.drawBackground(ctx,width,height,r);
            this.drawHour(hour,minute,second,ctx,width,height,r);
            this.drawMinute(minute,second,ctx,width,height,r);
            this.drawSecond(second,ctx,width,height,r);
            ctx.fillStyle="#555";
            ctx.beginPath();
            ctx.arc(0,0,8,0,2*Math.PI);
            ctx.fill();
            ctx.restore();
        }
    },
    created(){
        var dom=document.getElementById("view");
        var context = dom.getContext('2d');
        // var ctx=dom.getContext("2D");
        var width=context.canvas.width;
        var height=context.canvas.height;
        var r=width/2;

        window.setInterval(function(){this.run(context,width,height,r);},1000);
    }
}
</script>