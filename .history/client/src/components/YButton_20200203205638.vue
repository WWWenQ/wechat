<template>
    <button class="y-button" :class="{'is-disabled':disabled}"></button>
</template>

<script>
export default {
    name:"YButton",
    props:{
        type:String,
        disabled:{
            
        }
    }
}
</script>
<style scoped>

</style>