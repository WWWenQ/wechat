<template>
    <div>
        <Header title="我的" />
    </div>
</template>
<script>
import Header from "../components/Header"
import jwt_decode from "jwt-"
export default {
    name:"Me",
    components:{
        Header
    }
}
</script>
<style scoped>

</style>