<template>
    <div>
        <Header title="我的" />
        <div class="container">
            <div class="cell-wrapper">
                <div class="cell-title" v-if="user">
                    <img :src="user.avatar" alt="">
                    <span>{{user.name}}</span>
                </div>
            </div>
            <div class="btn_wrapper">
                <YButton @click="logout">退出登录</YButton>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"
import jwt_decode from "jwt-decode"
import YButton from "../components/YButton"
export default {
    name:"Me",
    components:{
        Header,
        YButton
    },
    computed:{
        user(){
            const token = localStorage.wxpyqToken;
            const decode = jwt_decode(token)
            return decode
        }
    },
    methods:{
        logout(){
            localStorage.removeItem("wxpyqToken");
            this.
        }
    }
}
</script>
<style scoped>

</style>