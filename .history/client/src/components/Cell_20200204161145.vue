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
    props:{
        path:String,
        title:String,
        src:String
    },
    computed:{
        getSrc(){
            return require("../assets/pyq.jpg")
        }
    }

}
</script>
<style scoped>

</style>