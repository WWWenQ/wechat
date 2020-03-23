<template>
    <button class="y-button" :class="{'is-disabled':disabled}"></button>
</template>

<script>
export default {
    name:"YButton",
    props:{
        type:String,
        disable
    }
}
</script>
<style scoped>

</style>