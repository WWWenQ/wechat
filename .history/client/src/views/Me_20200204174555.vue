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
    computed
}
</script>
<style scoped>

</style>