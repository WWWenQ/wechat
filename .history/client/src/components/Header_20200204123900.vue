<template>
    <header class="header">
        <div class="headeer-button"></div>
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