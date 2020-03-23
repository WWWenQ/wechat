<template>
    <div class="scroll-wrap" ref="wrapper">
        <div>
            <!-- 下拉刷新 -->
            <div class="pulldown">
                <div class="clear">
                    <div class="fl">
                        <img width src="../assets/scroll_load.gif" alt="">
                        <div class="fl">下拉刷新</div>
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
            scroll:{}
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
        }
    }
}
</script>

<style scoped>
    .scroll-wrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>