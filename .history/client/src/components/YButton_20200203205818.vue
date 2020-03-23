<template>
    <button class="y-button" :class="{'is-disabled':disabled}" :type="type" :disabled></button>
</template>

<script>
export default {
    name:"YButton",
    props:{
        type:String,
        disabled:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style scoped>

</style>