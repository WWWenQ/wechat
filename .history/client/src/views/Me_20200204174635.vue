<template>
    <div>
        <Header title="我的" />
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
        }
    }
}
</script>
<style scoped>

</style>