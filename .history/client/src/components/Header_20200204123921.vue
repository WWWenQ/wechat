<template>
    <header class="header">
        <div class="headeer-button is-left" v-show="isLeft">
            i.fa
        </div>
    </header>
</template>
<script>
export default {
   name:"Header",
   props:{
       title:String,
       isLeft:{
           type:Boolean,
           default:false
       },
       btn_icon:String
   } 
}
</script>
<style scoped>

</style>