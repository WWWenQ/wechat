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
export default {
    
}
</script>

<style scoped>
    .scroll-wrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>