<template>
  <div class="circle">
    <Header title="朋友圈" btn_icon="camera" :isLeft="true" />
  </div>
</template>
<script>
import Header from "../components/Header";
import jwt_decode from "jwt-decode";
export default {
    name:"Moments",
    components:{
        Header
    },
    computed:{
        user(){
            const token = localStorage.token;
        }
    }
}
</script>
<style scoped>
    .circle{
        width: 100%;
        height: 100%;
        box-sizing: border-box
    }

</style>