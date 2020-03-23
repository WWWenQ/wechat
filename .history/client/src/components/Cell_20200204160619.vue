<template>
    <router-link :to="path">
        <div class="cell-wrapper">
            <div class="cell-title">
                <img :src="getSrc" alt="">
                <span>{{title}}</span>
            </div>
            <div class="cell-allow-right"></div>
        </div>
    </router-link>
</template>
<script>
export default {
    name:"Cell"

}
</script>
<style scoped>

</style>