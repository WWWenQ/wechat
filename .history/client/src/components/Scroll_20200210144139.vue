<template>
    <div class="scroll-wrap" ref="wrapper">
        <div>
            <!-- 下拉刷新 -->
            <div class="pulldown"  v-show="dragTip.showLoading">
                <div class="clear">
                    <div class="fl">
                        <img width="16" src="../assets/scroll_load.gif" alt="">
                        <div class="fl">{{dragTip.text}}</div>
                    </div>
                </div>
            </div>

            <slot></slot>



            <!-- 上拉加载 -->
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"Scroll",
    data(){
        return {
            scroll:{},
            dragTip:{
                text:"下拉刷新",
                showLoading:false
            
            }
        }
    },
    mounted(){
        setTimeout(() => {
            this.initScroll()
        }, 20);
    },
    methods:{
        initScroll(){
            if(!this.$refs.wrapper){
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:1
            })
            this.scroll.on('scroll',pos=>{
                this.dragTip.showLoading=true;
                if(pos.y>50){
                    this.dragTip.text = "释放刷新"
                }
            })
            this.scroll.on('touchEnd',pos=>{
                if(pos.y>50){
                    this.dragTip.text="刷新中..."
                    
                }
            })
        },


    }
}
</script>

<style scoped>
   .scroll-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.fl {
  display: inline-block;
}
.fl img {
  vertical-align: middle;
  margin-right: 0.2rem;
}
/* 下拉刷新 */
.pulldown,
.pullup {
  width: 100%;
  height: 50px;
  position: relative;
  color: #888;
}
.clear {
  padding: 10px 0px;
  font-size: 0.28rem;
  position: absolute;
  left: 50%;
  top: 5px;
  transform: translate(-50%, 0);
}
.list-donetip {
  text-align: center;
  line-height: 50px;
  font-size: 0.28rem;
}
</style>