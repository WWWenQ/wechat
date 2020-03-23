<template>
  <div class="circle">
    <Header title="朋友圈" btn_icon="camera" :isLeft="true" />
    <div class="container">
        <div class="scroll-wrap">
            <div class="head_wrapper">
                <div class="user_head">
                    <span>{{user.name}}</span>
                    <div class="user_img">
                        <img :src="user.avatar" alt="" class="head_img">
                    </div>
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
            const token = localStorage.wxpyqtoken;
            const decode = jwt_decode(token);
            return decode;
        }
    },
    methods:{
        getLatestData()
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