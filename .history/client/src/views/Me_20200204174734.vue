<template>
    <div>
        <Header title="我的" />
        <div class="container">
            <div class="cell-wrapper">
                <div class="cell-title" v-if="user">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"
import jwt_decode from "jwt-decode"
export default {
    name:"Me",
    components:{
        Header
    },
    computed:{
        user(){
            const token = localStorage.wxpyqToken;
            const decode = jwt_decode(token)
            return decode
        }
    }
}
</script>
<style scoped>

</style>