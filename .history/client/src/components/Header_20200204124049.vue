<template>
    <header class="header">
        <div class="headeer-button is-left" v-show="isLeft">
            <i class="fa fa-chevron-left"></i>
            <button @click="$router.go(-1)">返回</button>
        </div>
        <h1 class="header-title">{{title}}</h1>
        <div class="header-button is-right" v-show="btn_icon">
            
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