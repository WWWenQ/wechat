<template>
    <router-link :to="path">
        <div class="cell-wrapper">
            <div class="cell-title">
                <img :src="getSrc" alt="">
                <span></span>
            </div>
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