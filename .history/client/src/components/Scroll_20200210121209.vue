<template>
    <div class="scroll-wrap" ref="wrapper">
        <div>
            <!-- 下拉刷新 -->


            <slot></slot>



            <!-- 上拉加载 -->
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"Scroll",
    data:{
        return:{
            scroll:{}
        }
    },
    mounted
}
</script>

<style scoped>
    .scroll-wrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>