<template>
    <div class="information">
        <Header :is-left="true" title="详细资料" btn_icon="ellipsis-h"/>
    </div>
</template>
<script>
import Header from "../components/Header"
import UserCell from "../components/"
export default {
    name:"Information",
    components:{
        Header
    }

}
</script>
<style scoped>

</style>