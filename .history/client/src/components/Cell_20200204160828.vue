<template>
    <router-link :to="path">
        <div class="cell-wrapper">
            <div class="cell-title">
                <img :src="getSrc" alt="">
                <span>{{title}}</span>
            </div>
            <div class="cell-allow-right">
                <i class="fa fa-chevron-right"></i>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    name:"Cell",
    

}
</script>
<style scoped>

</style>