<template>
  <div class="circle">
    <Header title="朋友圈" btn_icon="camera" :isLeft="true" />
    <div class="container">
        <div class="scroll-wrap">
            <div class="head_wrapper">
                <div class="user_head">
                    <span>{{user.name}}</span>
                </div>
            </div>
        </div>
    </div>
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
            const decode = jwt_decode(token);
            return decode;
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